import { printMessage } from '../utils/printMessage.js';

import { INVALID_INPUT, OPERATION_FAILED } from '../constants/index.js';

export const errorHandler = {
    invalidInput: () => printMessage(INVALID_INPUT),
    failedOperation: () => printMessage(OPERATION_FAILED),
};
