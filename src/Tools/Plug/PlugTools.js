import {getNFTActor, getAllUserNFTs} from "@psychedelic/dab-js";
import * as agent_1 from "@dfinity/agent";
import * as cross_fetch from 'cross-fetch';
import * as principal_1 from '@dfinity/principal';

export const loadPlug = async (tokenData) => {
    const whiteList = tokenData.map(e => e.canisterId);
    const connected = await connectPlug(whiteList)
    if (connected) {
        const principal = await requestPrincipal();
        /*try {
            console.log(await getAllUserNFTs({user: principal.toString()}))
        } catch (e) {
            console.log(e);
        }*/
        return await Promise.all(tokenData.map(e => {
            return getPlugNFTCollections(principal, e);
        }))
    }
    return null
}

const connectPlug = async (whitelist) => {
    return await window.ic.plug.requestConnect({
        whitelist: whitelist
    });
}

const requestPrincipal = async () => {
    return await window.ic.plug.agent.getPrincipal();
}

const getPlugNFTCollections = async (principal, tokenItem) => {
    console.log('getNFTCollections')
    console.log(principal);
    const IC_HOST = "https://ic0.app/";
    const DEFAULT_AGENT = new agent_1.HttpAgent({fetch: cross_fetch.default, host: IC_HOST});
    const NFTActor = getNFTActor({
        canisterId: tokenItem.canisterId,
        agent: DEFAULT_AGENT,
        standard: tokenItem.standard
    });
    console.log(NFTActor);
    const collections = await NFTActor.getUserTokens(principal_1.Principal.fromText(principal.toString()));
    /*try {
    } catch (e) {
        console.log(e);
    }*/
    console.log('getNFTCollections', collections)
    return {type: tokenItem.type, collections: collections};
}
