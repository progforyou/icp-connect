import {Actor, HttpAgent} from '@dfinity/agent';
import idlFactory from '../Factories/ext.did';

export async function createAgent(stoicIdentity) {

    return new HttpAgent({
        host: 'https://raw.ic0.app',
        identity: stoicIdentity,
    });
}

export async function createLedgerActor(stoicIdentity, canisterId) {
    const agent = await createAgent(stoicIdentity);

    return Actor.createActor(idlFactory, {
        agent,
        canisterId: canisterId,
    });
}