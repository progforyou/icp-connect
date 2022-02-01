import {getNFTActor, getAllUserNFTs} from "@psychedelic/dab-js";
import * as agent_1 from "@dfinity/agent";
import * as cross_fetch from 'cross-fetch';
import * as principal_1 from '@dfinity/principal';
import _ from "lodash";

export const getPlugData = async (tokenData, principal, actors) => {
    return await Promise.all(tokenData.map(async e => {
        let result = await getPlugNFTCollections(principal, e).catch(e => {
            return undefined;
        });
        if (result){
            let actor = actors.find(actor => _.isEqual(actor.token, e)).actor;
            let listings = await actor.listings();
            result.collections = result.collections.map(e => ({...e,  listed: !!_.find(listings, function(o) { return o[0] === Number(e.index); })}))
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

export const getPlugNFTCollections = async (principal, tokenItem) => {
    const IC_HOST = "https://ic0.app/";
    const DEFAULT_AGENT = new agent_1.HttpAgent({fetch: cross_fetch.default, host: IC_HOST});
    const NFTActor = getNFTActor({
        canisterId: tokenItem.canisterId,
        agent: DEFAULT_AGENT,
        standard: tokenItem.standard
    });
    const collections = await NFTActor.getUserTokens(principal_1.Principal.fromText(principal.toString()));
    /*try {
    } catch (e) {
        console.log(e);
    }*/
    return {type: tokenItem.type, collections: collections};
}
