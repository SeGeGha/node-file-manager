import { up } from './up/index.js';
import { ls } from './ls/index.js';
import { cd } from './cd/index.js';
import { os } from './os/index.js';

import { errorHandler } from '../errorHandler.js';

import { OS_COMMAND_ARGUMENTS } from '../../constants/index.js';

export const operationManager = {
    up: arg => arg ? errorHandler.invalidInput() : up(),
    cd: arg => arg ? cd(arg) : errorHandler.invalidInput(),
    ls: arg => arg ? errorHandler.invalidInput() : ls(),
    os: arg => Object.values(OS_COMMAND_ARGUMENTS).includes(arg) ? os(arg) : errorHandler.invalidInput(),
};
