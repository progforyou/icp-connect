// store/index.js
import { createStoreon } from 'storeon'

import { tokens } from './tokens';
import {setup} from "./setup";

export const store = createStoreon([tokens, setup])