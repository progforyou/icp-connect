import {createLedgerActor} from "./ledger";
import {createNewStoicIdentityConnection} from "./stoic-identity-connect";

const getAddresses = async (newStoicIdentity) => {
    let addresses;
    try {
        addresses = await newStoicIdentity.accounts();
        addresses = JSON.parse(addresses);
    }
    catch (e) {
        console.log(e);
    }
    return addresses;
}

export const loadStoic = async (tokenData) => {
    const newStoicIdentity = await createNewStoicIdentityConnection();
    console.info('Connected to Stoic Identity:', newStoicIdentity);
    let addresses = await getAddresses(newStoicIdentity);
    let actor = await createLedgerActor(newStoicIdentity, tokenData[0].canisterId);
    addresses.map(e => {
        actor.tokens(e.address).then(r => {
            console.log(`Account ${e.name}: `, r);
        })
    })
}