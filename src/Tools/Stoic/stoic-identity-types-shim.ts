
import {SignIdentity} from '@dfinity/agent';
// ic-stoic-identity is not typed
// @ts-ignore
import {StoicIdentity as StoicIdentityImport} from 'ic-stoic-identity';

/** This is easier than creating a global .d.ts file... unless you're into that :P */
export const StoicIdentity: StoicIdentity & StoicIdentityStaticTypes = StoicIdentityImport;

type StoicIdentityStaticTypes = {
    disconnect(): Promise<void>;
};

export interface StoicIdentity extends SignIdentity {
    connect(): Promise<StoicIdentity>;
    load(host?: string): Promise<StoicIdentity | undefined>;
}
