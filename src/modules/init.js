import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

import { user } from './userInfo.js';

import { operationManager } from './commands/operationManager.js';

import { printMessage } from '../utils/printMessage.js';
import { parseCommandLine } from '../utils/parseCommandLine.js';
import { callFuse } from '../utils/callFuse.js';

import { EXIT_COMMAND } from '../constants/index.js';

const printCwdMessage = () => printMessage(`You are currently in ${user.cwd}\n`);

export const init = () => {
    printMessage(`Welcome to the File Manager, ${user.name}!`);
    printCwdMessage();

    const readlineInterface = createInterface({ input, output });

    readlineInterface.on('line', line => {
        if (line === EXIT_COMMAND) readlineInterface.close();

        const [ command, args ] = parseCommandLine(line);
        const result = callFuse(operationManager[command], args);
        if (result) printMessage(result);

        printCwdMessage();
    });

    readlineInterface.on('close', () => {
        printMessage(`Thank you for using File Manager, ${user.name}, goodbye!`);
        process.exit();
    });
};
