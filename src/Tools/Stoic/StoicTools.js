import {createLedgerActor} from "./ledger";
import {createNewStoicIdentityConnection} from "./stoic-identity-connect";
import {Principal} from "@dfinity/principal";
import _ from "lodash";

export const getAddresses = async (newStoicIdentity) => {
    let addresses;
    try {
        addresses = await newStoicIdentity.accounts();
        addresses = JSON.parse(addresses);
    } catch (e) {
        console.log(e);
    }
    return addresses;
}


export const fetchResult = (result, oneToken, listings) => {
    return result.ok.map(el => {
        return {
            canister: oneToken.canisterId,
            id: tokenIdentifier(oneToken.canisterId, el),
            index: el,
            standard: oneToken.standard,
            url: `https://${oneToken.canisterId}.raw.ic0.app/?cc=0&type=thumbnail&tokenid=${tokenIdentifier(oneToken.canisterId, el)}`,
            listed: !!_.find(listings, function(o) { return o[0] === el; })
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