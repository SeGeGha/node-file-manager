import { exit } from './exit/index.js';

import { EXIT_COMMAND } from '../../constants/index.js'

export const operationManager = {
    [EXIT_COMMAND]: exit
};
