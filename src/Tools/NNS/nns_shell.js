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
    return await NNSUiActor.stats().then(r => {
        return ({
            total: (Number(r[0] / 1000000n) / 100).toFixed(2),
            high: (Number(r[1] / 1000000n) / 100).toFixed(2),
            low: (Number(r[2] / 1000000n) / 100).toFixed(2),
            floor: (Number(r[3] / 1000000n) / 100).toFixed(2),
            listings: Number(r[4]),
            tokens: Number(r[5]),
            sales: Number(r[6]),
            average: (Number(r[6]) ? (Number((r[0] / r[6]) / 1000000n) / 100).toFixed(2) : "-"),
        });
    })
}