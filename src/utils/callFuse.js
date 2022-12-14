import { errorHandler } from '../modules/errorHandler.js';

export const callFuse = (operation, args) => typeof operation === 'function' ? operation(args) : errorHandler.invalidInput();
