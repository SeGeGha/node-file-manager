import { printMessage } from '../../../utils/printMessage.js';
import { user } from '../../userInfo.js';

import { INVALID_INPUT } from '../../../constants/index.js';

export const exit = (args) => {
    if (args && args.length) return printMessage(INVALID_INPUT);

    printMessage(`Thank you for using File Manager, ${user.name}, goodbye!`);
    process.exit();
};
