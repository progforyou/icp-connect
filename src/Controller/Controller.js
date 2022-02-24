import {store} from "../Store";
import {connectPlug, getPlugData, requestPrincipal} from "../Tools/Plug/PlugTools";
import {createNewStoicIdentityConnection} from "../Tools/Stoic/stoic-identity-connect";
import {fetchResult, getAddresses} from "../Tools/Stoic/StoicTools";
import {createLedgerActor} from "../Tools/Stoic/ledger";
import {createNNSActor, getNNSStats} from "../Tools/NNS/nns_shell";
import {getIPCtoUSD} from "../Tools/ICPprice/ICPprice";
import _ from 'lodash';
import * as plug_controller from '@psychedelic/plug-controller';
import '../Tools/Discord/connectDiscord';
import {addRole, getRoleUser, removeRole} from "../Tools/Discord/connectDiscord";
import * as principal_1 from "@dfinity/principal";


/*import {rosettaApi} from "../Tools/Rosetta/RosettaTools";*/

class controller {
    constructor() {
        this.tokenData = [
            {standard: "EXT", canisterId: "unssi-hiaaa-aaaah-qcmya-cai", type: "ICPets"}
        ]
        this.listings = {}
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
        await this.setPlugActors();
        if (connected) {
            await this.getNNSStats();
            this.principal = await requestPrincipal();
            this.accounts = [].concat(plug_controller.default.getAccountId(principal_1.Principal.fromText(this.principal.toString())));
            let data = await this.getPlugData();
            store.dispatch('setup/type', "plug");
            return data;
        }
    }

    async getPlugData(actors) {
        if (await window.ic.plug.createAgent()) {
            if (!this.principal) this.principal = await requestPrincipal();
            let data = await getPlugData(this.tokenData, this.principal, this.actors, this.accounts);
            data = [].concat.apply([], data).filter(e => e);
            store.dispatch('tokens/set', data);
            return data;
        } else throw 'Not connect';
    }

    async checkConnectedPlug() {
        return await window.ic.plug.isConnected();
    }

    async loadStoicData() {
        this.stoicIdentity = await createNewStoicIdentityConnection();
        this.principal = this.stoicIdentity.getPrincipal();
        console.info('Connected to Stoic Identity:', this.stoicIdentity);
        this.accounts = await getAddresses(this.stoicIdentity);
        let data = await this.getStoicData();
        await this.setStoicActors();
        await this.getNNSStats();
        store.dispatch('setup/type', "stoic");
        store.dispatch('tokens/set', data);
        return data;
    }

    async getStoicData() {
        if (this.stoicIdentity && this.accounts) {
            let result = [];
            await Promise.all(this.tokenData.map(async oneToken => {
                let actor = await createLedgerActor(this.stoicIdentity, oneToken.canisterId);
                let listings = await actor.listings();
                let tokens = await Promise.all(this.accounts.map(async account => {
                    return await actor.tokens(account.address).then(r => {
                        if (r.ok) {
                            return fetchResult(r, oneToken, listings);
                        } else {
                            return undefined;
                        }
                    })
                }))
                tokens = [].concat.apply([], tokens).filter(e => e);
                result.push({
                    collections: tokens,
                    type: oneToken.type
                })
            }))
            if (!isArrayEqual(result, store.get().tokens)) {
                console.log('DISPATCH');
                console.log(result);
                store.dispatch('tokens/set', result);
            }
            return result;
        }
    }

    async setStoicActors() {
        this.actors = await Promise.all(this.tokenData.map(async oneToken => {
            return {token: oneToken, actor: await createLedgerActor(this.stoicIdentity, oneToken.canisterId)}
        }))
    }


    async setPlugActors() {
        this.actors = await Promise.all(this.tokenData.map(async oneToken => {
            return {token: oneToken, actor: await createNNSActor(oneToken.canisterId)};
        }))
    }


    async getNNSStats() {
        let data = await Promise.all(this.actors.map(async actor => {
            return await getNNSStats(actor.actor);
        }))
        data = [].concat.apply([], data).map((e, k) => ({token: this.tokenData[k], stats: e}));
        store.dispatch('nns_stats/set', data);
    }

    async getICPtoUSD() {
        let data = await getIPCtoUSD();
        store.dispatch('icp_price/set', data);
    }

    async addRole(name, discriminator) {
        let accounts = [];
        this.accounts.map(e => {
            if (typeof e === 'object') {
                accounts.push(e.address);
            } else {
                accounts.push(e);
            }
        })
        return await addRole(name, discriminator, this.principal.toText(), accounts).then(r => {
            store.dispatch('setup/verify', r.data);
            return r
        });
    }

    async removeRole(name, discriminator) {
        return await removeRole(name, discriminator, this.principal.toText()).then(r => {
            store.dispatch('setup/verify', {});
            return r
        });
    }

    async checkDiscordStatus() {
        return await getRoleUser(this.principal.toText())
    }
}

const isArrayEqual = function (x, y) {
    return _.isEmpty(_.xorWith(x, y, _.isEqual));
};

export default () => {
    return new controller();
}