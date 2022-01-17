import {getNFTActor} from "@psychedelic/dab-js";

export const loadPlug = async (canisterId) => {
    const connected = await connectPlug([canisterId])
    if (connected){
        const principal = await requestPrincipal();
        return await getPlugNFTCollections(principal, canisterId);
    }
    return null
}

const connectPlug = async (whitelist) => {
    return await window.ic.plug.requestConnect({
        whitelist
    });
}

const requestPrincipal = async () => {
    return await window.ic.plug.agent.getPrincipal();
}

const getPlugNFTCollections = async (principal, canisterId) => {
    console.log('getNFTCollections')
    console.log(principal);
    const standard = 'EXT';
    const NFTActor = getNFTActor({canisterId: canisterId, agent: window.ic.plug.agent, standard: standard});
    const collections = await NFTActor.getUserTokens(principal);
    console.log('getNFTCollections', collections)
    return collections;
}
