import { INVALID_INPUT, OPERATION_FAILED } from '../constants/index.js';

export const errorHandler = {
    invalidInput: () => INVALID_INPUT,
    failedOperation: () => OPERATION_FAILED,
};
