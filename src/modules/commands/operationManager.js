import { up } from './up/index.js';
import { ls } from './ls/index.js';

import { errorHandler } from '../errorHandler.js';

export const operationManager = {
    up: arg => {
        if (arg) return errorHandler.invalidInput();

        return up();
    },
    ls: arg => {
        if (arg) return errorHandler.invalidInput();

        return ls();
    },
};
