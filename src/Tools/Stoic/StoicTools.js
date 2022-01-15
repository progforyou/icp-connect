import {createLedgerActor} from "./ledger";
import {createNewStoicIdentityConnection} from "./stoic-identity-connect";

export const loadStoic = async () => {
    const newStoicIdentity = await createNewStoicIdentityConnection();
    console.info('Connected to Stoic Identity:', newStoicIdentity);
    let actor = await createLedgerActor(newStoicIdentity);
    console.log(actor);
    actor.tokens('12268043fed9b0c430c279e55b9959f70f5b8413e3690f6a4cd7df00578f9613').then(r => {
        console.log(r);
    })
    actor.tokens_ext('12268043fed9b0c430c279e55b9959f70f5b8413e3690f6a4cd7df00578f9613').then(r => {
        console.log(r);
    })
}