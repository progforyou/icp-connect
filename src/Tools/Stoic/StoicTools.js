import {createLedgerActor} from "./ledger";
import {createNewStoicIdentityConnection} from "./stoic-identity-connect";
import {Principal} from "@dfinity/principal";

const getAddresses = async (newStoicIdentity) => {
    let addresses;
    try {
        addresses = await newStoicIdentity.accounts();
        addresses = JSON.parse(addresses);
    } catch (e) {
        console.log(e);
    }
    return addresses;
}

export const loadStoic = async (tokenData) => {
    const newStoicIdentity = await createNewStoicIdentityConnection();
    console.info('Connected to Stoic Identity:', newStoicIdentity);
    let addresses = await getAddresses(newStoicIdentity);
    let result = [];
    await Promise.all(tokenData.map(async oneToken => {
        let actor = await createLedgerActor(newStoicIdentity, oneToken.canisterId);
        let tokens = await Promise.all(addresses.map(async e => {
            return await actor.tokens(e.address).then(r => {
                console.log(`Account ${e.name}: `, r);
                if (r.ok) {
                    return fetchResult(r, oneToken);
                } else {
                    return undefined;
                }
            })
        }))
        tokens = [].concat.apply([], tokens).filter(e => e);
        console.log(tokens);
        result.push({
            collections: tokens,
            type: oneToken.type
        })
    }))
    return result;
}

const fetchResult = (result, oneToken) => {
    return result.ok.map(el => {
        return {
            canister: oneToken.canisterId,
            id: tokenIdentifier(oneToken.canisterId, el),
            index: el,
            standard: oneToken.standard,
            url: `https://${oneToken.canisterId}.raw.ic0.app/?tokenid=${tokenIdentifier(oneToken.canisterId, el)}`
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