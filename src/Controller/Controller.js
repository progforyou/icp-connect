import {store} from "../Store";
import {connectPlug, getPlugData, getPlugNFTCollections, requestPrincipal} from "../Tools/Plug/PlugTools";
import {loadStoic} from "../Tools/Stoic/StoicTools";

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
        let data = await loadStoic(this.tokenData);
        console.log(data);
        store.dispatch('setup/type', "stoic");
        store.dispatch('tokens/set', data);
        return data;
    }

    async getStoicData() {

    }

}

export default () => {
    return new controller();
}