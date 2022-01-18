import {store} from "../Store";
import {loadPlug} from "../Tools/Plug/PlugTools";
import {loadStoic} from "../Tools/Stoic/StoicTools";

class controller {
    constructor() {
        this.tokenData = [
            {standard: "EXT", canisterId: "unssi-hiaaa-aaaah-qcmya-cai", type: "ICPets"},
            {standard: "EXT", canisterId: "dknxi-2iaaa-aaaah-qceuq-cai", type: "Bulls"}
        ]
        if (controller._instance) {
            return controller._instance
        }
        controller._instance = this;
    }

    async loadPlugData() {
        return loadPlug(this.tokenData).then(r => {
            store.dispatch('tokens/set', r);
            return true
        })
    }

    async loadStoicData() {
        return loadStoic(this.tokenData)
            .then(r => {
                store.dispatch('tokens/set', r);
            })
    }

}

export default () => {
    return new controller();
}