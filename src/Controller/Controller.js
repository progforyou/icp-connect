import {store} from "../Store";
import {loadPlug} from "../Tools/Plug/PlugTools";
import {loadStoic} from "../Tools/Stoic/StoicTools";

class controller {
    constructor() {
        this.canisterId = "unssi-hiaaa-aaaah-qcmya-cai"
        if (controller._instance) {
            return controller._instance
        }
        controller._instance = this;
    }

    async loadPlugData() {
        return loadPlug(this.canisterId).then(r => {
            store.dispatch('tokens/set', r);
            return true
        })
    }

    async loadStoicData() {
        loadStoic(this.canisterId)
            .then(r => {
                store.dispatch('tokens/set', r);
            }).catch(e => {
            console.log(e);
        })
    }

}

export default () => {
    return new controller();
}