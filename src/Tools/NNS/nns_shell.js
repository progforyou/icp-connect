import nnsUi from '../Factories/ext.did';

export const createNNSActor = async (nnsCanisterId) => {
    return await window.ic.plug?.createActor({
        canisterId: nnsCanisterId,
        interfaceFactory: nnsUi,
    });
}

export const getNNSStats = async (NNSUiActor) => {
    if (!NNSUiActor) {
        return null;
    }
    return await NNSUiActor?.get_stats();
}