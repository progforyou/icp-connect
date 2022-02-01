import _ from 'lodash';

export function setup(store) {
    store.on('@init', () => ({
        setup: {
            verify: null
        }
    }))

    store.on('setup/set', ({setup}, data) => {
        return {setup: data}
    })

    store.on('setup/connected', ({setup}, data) => {
        return {setup: {...setup, connected: data}}
    })

    store.on('setup/type', ({setup}, type) => {
        return {setup: {...setup, type: type}}
    })

    store.on('setup/verify', ({setup}, verify) => {
        if (!_.isEqual(verify, setup.verify)){
            return {setup: {...setup, verify: verify}}
        }
    })
}