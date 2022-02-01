import {StoicIdentity} from "ic-stoic-identity";

export async function createNewStoicIdentityConnection() {
    const currentStoicAuth = await loadStoredStoicIdentity();
    if (currentStoicAuth) {
        return currentStoicAuth;
    } else {
        return await StoicIdentity.connect();
    }
}

export async function loadStoredStoicIdentity() {
    const stoicIdentity = await StoicIdentity.load();
    if (stoicIdentity) {
        return stoicIdentity;
    } else {
        return undefined;
    }
}