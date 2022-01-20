import {store} from "../Store";
import {connectPlug, getPlugData, getPlugNFTCollections, requestPrincipal} from "../Tools/Plug/PlugTools";
import {createNewStoicIdentityConnection} from "../Tools/Stoic/stoic-identity-connect";
import {fetchResult, getAddresses} from "../Tools/Stoic/StoicTools";
import {createLedgerActor} from "../Tools/Stoic/ledger";

class controller {
    constructor() {
        this.tokenData = [
            {standard: "EXT", canisterId: "unssi-hiaaa-aaaah-qcmya-cai", type: "ICPets"},
            {standard: "EXT", canisterId: "dknxi-2iaaa-aaaah-qceuq-cai", type: "Bulls"},
            {standard: "EXT", canisterId: "ahl3d-xqaaa-aaaaj-qacca-cai", type: "ICTuTs"}
        ]
        if (controller._instance) {
            return controller._instance
        }
        controller._instance = this;
    }

    async loadPlugData() {
        const whiteList = this.tokenData.map(e => e.canisterId);
        const connected = await connectPlug(whiteList);
        store.dispatch('setup/connected', connected);
        store.dispatch('setup/type', 'plug');
        if (connected) {
            this.principal = await requestPrincipal();
            const data = getPlugData(this.tokenData, this.principal);
            store.dispatch('setup/type', "plug");
            store.dispatch('tokens/set', data);
            return data
        }
    }

    async getPlugData() {
        if (await this.checkConnectedPlug() && window.ic.plug.agent) {
            if (!this.principal) this.principal = await requestPrincipal();
            const data = await getPlugData(this.tokenData, this.principal);
            store.dispatch('tokens/set', data);
        } else throw 'Not connect';
    }

    async checkConnectedPlug() {
        return await window.ic.plug.isConnected();
    }

    async loadStoicData() {
        this.stoicIdentity = await createNewStoicIdentityConnection();
        console.info('Connected to Stoic Identity:', this.stoicIdentity);
        this.addresses = await getAddresses(this.stoicIdentity);
        let data = await this.getStoicData();
        console.log(data);
        store.dispatch('setup/type', "stoic");
        store.dispatch('tokens/set', data);
        return data;
    }

    async getStoicData() {
        if (this.stoicIdentity){
            let result = [];
            await Promise.all(this.tokenData.map(async oneToken => {
                let actor = await createLedgerActor(this.stoicIdentity, oneToken.canisterId);
                let tokens = await Promise.all(this.addresses.map(async e => {
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
    }

}

export default () => {
    return new controller();
}