import {getNFTActor, getAllUserNFTs} from "@psychedelic/dab-js";
import * as agent_1 from "@dfinity/agent";
import * as cross_fetch from 'cross-fetch';
import * as principal_1 from '@dfinity/principal';
import _ from "lodash";
import {Principal} from "@dfinity/principal";

export const getPlugData = async (tokenData, principal, actors, account) => {
    return await Promise.all(tokenData.map(async e => {
        let result = await getPlugNFTCollections(principal, e).catch(e => {
            return undefined;
        });
        if (result) {
            let actor = actors.find(actor => _.isEqual(actor.token, e)).actor;
            let listings = await actor.listings();
            result.collections = result.collections.map(e => ({
                ...e, listed: !!_.find(listings, function (o) {
                    return o[0] === Number(e.index);
                })
            }))
        }
        return result;
    }))
}

export const connectPlug = async (whitelist) => {
    return await window.ic.plug.requestConnect({
        whitelist: whitelist
    });
}

export const requestPrincipal = async () => {
    return await window.ic.plug.agent.getPrincipal();
}

/*export const getPlugData = async (tokenData, principal, actors, account) => {
    return await Promise.all(tokenData.map(async e => {
        let actor = actors.find(actor => _.isEqual(actor.token, e)).actor;
        let listings = await actor.listings();
        let result = await getPlugNFTCollections(e, actor, account, listings);
        result = [].concat(...result);
        return result;
    }))
}
*/

/*const getPlugNFTCollections = async (oneToken, actor, accounts, listings) => {
    return await Promise.all(accounts.map(async account => {
        return await actor.tokens(account).then(r => {
            if (r.ok) {
                return fetchResult(r, oneToken, listings);
            } else {
                return undefined;
            }
        });
    }))
}*/

export const getPlugNFTCollections = async (principal, tokenItem) => {
    const IC_HOST = "https://ic0.app/";
    const DEFAULT_AGENT = new agent_1.HttpAgent({fetch: cross_fetch.default, host: IC_HOST});
    const NFTActor = getNFTActor({
        canisterId: tokenItem.canisterId,
        agent: DEFAULT_AGENT,
        standard: tokenItem.standard
    });
    const collections = await NFTActor.getUserTokens(principal_1.Principal.fromText(principal.toText()));
    return {type: tokenItem.type, collections: collections};
}

const fetchResult = (result, oneToken, listings) => {
    return result.ok.map(el => {
        return {
            canister: oneToken.canisterId,
            id: tokenIdentifier(oneToken.canisterId, el),
            index: el,
            standard: oneToken.standard,
            url: `https://${oneToken.canisterId}.raw.ic0.app/?tokenid=${tokenIdentifier(oneToken.canisterId, el)}`,
            listed: !!_.find(listings, function (o) {
                return o[0] === el;
            })
        }
    })
}

const to32bits = num => {
    let b = new ArrayBuffer(4);
    new DataView(b).setUint32(0, num);
    return Array.from(new Uint8Array(b));
}

const tokenIdentifier = (principal, index) => {
    const padding = Buffer("\x0Atid");
    const array = new Uint8Array([
        ...padding,
        ...Principal.fromText(principal).toUint8Array(),
        ...to32bits(index),
    ]);
    return Principal.fromUint8Array(array).toText();
};