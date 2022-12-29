import { validate, validator } from './validator.js';

import { up, cd, ls } from './nwd/index.js';
import { add, cat, cp, mv, rn, rm } from './fs/index.js';
import { os } from './os/index.js';
import { hash } from './hash/index.js';
import { compress, decompress } from './zlib/index.js';

export const operationManager = {
    up: arg => validate(up, arg, [ validator.isEmptyArg ]),
    cd: arg => validate(cd, arg, [ validator.isNotEmptyArg ]),
    ls: arg => validate(ls, arg, [ validator.isEmptyArg ]),
    cat: arg => validate(cat, arg, [ validator.isNotEmptyArg ]),
    add: arg => validate(add, arg, [ validator.isNotEmptyArg ]),
    rn: args => validate(rn, args, [ validator.hasExistPath, validator.isNotEmptyArg ]),
    cp: args => validate(cp, args, [ validator.hasExistPath, validator.hasExistPath ]),
    mv: args => validate(mv, args, [ validator.hasExistPath, validator.hasExistPath ]),
    rm: arg => validate(rm, arg, [ validator.isNotEmptyArg ]),
    os: arg => validate(os, arg, [ validator.isNotEmptyArg ]),
    hash: arg => validate(hash, arg, [ validator.isNotEmptyArg ]),
    compress: args => validate(compress, args, [ validator.hasExistPath, validator.hasExistPath ]),
    decompress: args => validate(decompress, args, [ validator.hasExistPath, validator.hasExistPath ]),
};
