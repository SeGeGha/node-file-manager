import { up } from './up/index.js';
import { ls } from './ls/index.js';
import { cd } from './cd/index.js';

import { errorHandler } from '../errorHandler.js';

export const operationManager = {
    up: arg => {
        if (arg) return errorHandler.invalidInput();

        return up();
    },
    cd: arg => {
        if (!arg) return errorHandler.invalidInput();

        return cd(arg);
    },
    ls: arg => {
        if (arg) return errorHandler.invalidInput();

        return ls();
    },
};
