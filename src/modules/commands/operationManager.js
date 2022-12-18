import { validator } from './validator.js';

import { up, cd, ls } from './ts/index.js';
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

export const operationManager = {
    up: arg => validator.isEmptyArg(arg, up),
    cd: arg => validator.isNotEmptyArg(arg, cd),
    ls: arg => validator.isEmptyArg(arg, ls),
    cat: arg => validator.isNotEmptyArg(arg, cat),
    add: arg => validator.isNotEmptyArg(arg, add),
    rn: arg => arg.split(' ').length === 2 ? rn(...arg.split(' ')) : errorHandler.invalidInput(),
    cp: arg => arg.split(' ').length === 2 ? cp(...arg.split(' ')) : errorHandler.invalidInput(),
    mv: arg => arg.split(' ').length === 2 ? mv(...arg.split(' ')) : errorHandler.invalidInput(),
    rm: arg => validator.isNotEmptyArg(arg, rm),
    os: arg => validator.isNotEmptyArg(arg, os),
    hash: arg => validator.isNotEmptyArg(arg, hash),
    compress: arg => arg.split(' ').length === 2 ? compress(...arg.split(' ')) : errorHandler.invalidInput(),
    decompress: arg => arg.split(' ').length === 2 ? decompress(...arg.split(' ')) : errorHandler.invalidInput(),
};
