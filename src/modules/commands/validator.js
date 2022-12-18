import { errorHandler } from '../errorHandler.js';

export const validator = {
   isEmptyArg: (arg, callback) => arg ? errorHandler.invalidInput() : callback(arg),
   isNotEmptyArg: (arg, callback) => arg ? callback(arg) : errorHandler.invalidInput(),
   hasArgInList: (arg, argslist, callback) => argslist.includes(arg) ? callback(arg) : errorHandler.invalidInput(),
};
