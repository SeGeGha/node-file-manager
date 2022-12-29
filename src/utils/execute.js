import { errorHandler } from '../modules/errorHandler.js';

export const execute = (operation, arg) => typeof operation === 'function' ? operation(arg) : errorHandler.invalidInput();
