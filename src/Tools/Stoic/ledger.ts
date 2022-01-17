import {Actor, ActorSubclass, HttpAgent, HttpAgentOptions} from '@dfinity/agent';
import idlFactory from './ext.did';
import {StoicIdentity} from './stoic-identity-types-shim.js';

/** Very incomplete type information. */
type LedgerApi = {
    tokens_ext: Function;
    tokens: Function;
    balance: Function;
};
export type LedgerActor = ActorSubclass<LedgerApi>;

export async function createAgent(stoicIdentity: StoicIdentity): Promise<HttpAgent> {
    const agentOptions: HttpAgentOptions = {
        host: 'https://raw.ic0.app',
        identity: stoicIdentity,
    };

    return new HttpAgent(agentOptions);
}

export async function createLedgerActor(stoicIdentity: StoicIdentity, canisterId: string): Promise<LedgerActor> {
    const agent = await createAgent(stoicIdentity);

    const ledgerActor = Actor.createActor<LedgerApi>(idlFactory, {
        agent,
        canisterId: canisterId,
    });
    console.log(ledgerActor);
    return ledgerActor;
}

/** Make an actual ICP transfer from a Stoic Wallet. Require a LedgerActor to be created already. */
export async function makeTransfer(
    ledgerActor: LedgerActor,
    /** Id of wallet to send the ICP to */
    to: string,
    /**
     * Transfer amount in e8s
     *
     * 1 = 0.00000001 ICP
     */
    amount: bigint,
    options?: {
        /** Fee in e8s. Defaults to 10000 e8s. */
        fee?: number;
        memo?: number;
        from_subaccount?: number;
        created_at_time?: {
            timestamp_nanos: number;
        };
    },
): Promise<bigint> {
    try {
        const feeE8s = options?.fee ? BigInt(options?.fee) : BigInt(10_000);
        const memo = options?.memo ? BigInt(options?.memo) : BigInt(0);

        const block: bigint | {height: number | bigint} = await ledgerActor.send_dfx({
            to: to,
            fee: {e8s: feeE8s},
            memo,
            amount: {e8s: BigInt(amount)},
            from_subaccount: [],
            created_at_time: [],
        });

        if (typeof block === 'bigint') {
            return block;
        } else if (typeof block.height === 'number') {
            return BigInt(block.height);
        } else if (typeof block.height === 'bigint') {
            return block.height;
        } else {
            throw new Error(`Invalid block returned: ${block}`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
