import { up } from './up/index.js';
import { cd } from './cd/index.js';
import { ls } from './ls/index.js';
import { cat } from './cat/index.js';
import { os } from './os/index.js';
import { hash } from './hash/index.js';

import { errorHandler } from '../errorHandler.js';

import { OS_COMMAND_ARGUMENTS } from '../../constants/index.js';

export const operationManager = {
    up: arg => arg ? errorHandler.invalidInput() : up(),
    cd: arg => arg ? cd(arg) : errorHandler.invalidInput(),
    ls: arg => arg ? errorHandler.invalidInput() : ls(),
    cat: arg => arg ? cat(arg) : errorHandler.invalidInput(),
    os: arg => Object.values(OS_COMMAND_ARGUMENTS).includes(arg) ? os(arg) : errorHandler.invalidInput(),
    hash: arg => arg ? hash(arg) : errorHandler.invalidInput(),
};
