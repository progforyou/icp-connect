// store/index.js
import { createStoreon } from 'storeon'

import { tokens } from './tokens';

export const store = createStoreon([tokens])