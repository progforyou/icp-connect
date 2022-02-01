// store/index.js
import { createStoreon } from 'storeon'

import { tokens } from './tokens';
import {setup} from "./setup";
import {nns_stats} from "./nns_stats";
import {icp_price} from "./icp_price";

export const store = createStoreon([tokens, setup, nns_stats, icp_price])