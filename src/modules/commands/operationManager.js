import { up } from './up/index.js';
import { cd } from './cd/index.js';
import { ls } from './ls/index.js';
import { cat } from './cat/index.js';
import { add } from './add/index.js';
import { rn } from './rn/index.js';
import { cp } from './cp/index.js';
import { mv } from './mv/index.js';
import { rm } from './rm/index.js';
import { os } from './os/index.js';
import { hash } from './hash/index.js';
import { compress, decompress } from './zlib/index.js';

import { errorHandler } from '../errorHandler.js';

import { OS_COMMAND_ARGUMENTS } from '../../constants/index.js';

export const operationManager = {
    up: arg => arg ? errorHandler.invalidInput() : up(),
    cd: arg => arg ? cd(arg) : errorHandler.invalidInput(),
    ls: arg => arg ? errorHandler.invalidInput() : ls(),
    cat: arg => arg ? cat(arg) : errorHandler.invalidInput(),
    add: arg => arg ? add(arg) : errorHandler.invalidInput(),
    rn: arg => arg.split(' ').length === 2 ? rn(...arg.split(' ')) : errorHandler.invalidInput(),
    cp: arg => arg.split(' ').length === 2 ? cp(...arg.split(' ')) : errorHandler.invalidInput(),
    mv: arg => arg.split(' ').length === 2 ? mv(...arg.split(' ')) : errorHandler.invalidInput(),
    rm: arg => arg ? rm(arg) : errorHandler.invalidInput(),
    os: arg => Object.values(OS_COMMAND_ARGUMENTS).includes(arg) ? os(arg) : errorHandler.invalidInput(),
    hash: arg => arg ? hash(arg) : errorHandler.invalidInput(),
    compress: arg => arg.split(' ').length === 2 ? compress(...arg.split(' ')) : errorHandler.invalidInput(),
    decompress: arg => arg.split(' ').length === 2 ? decompress(...arg.split(' ')) : errorHandler.invalidInput(),
};
