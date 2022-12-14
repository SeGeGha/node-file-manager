import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

import { exit } from './exit.js';
import { user } from './userInfo.js';
import { errorHandler } from './errorHandler.js';

import { operationManager } from './commands/operationManager.js';

import { printMessage } from '../utils/printMessage.js';
import { parseCommand } from '../utils/parseCommand.js';

import { EXIT_COMMAND } from '../constants/index.js';

export const init = () => {
    printMessage(`Welcome to the File Manager, ${user.name}!`);
    printMessage(`You are currently in ${user.homedir}`)

    const readlineInterface = createInterface({ input, output });

    readlineInterface.on('line', line => {
        if (line === EXIT_COMMAND) readlineInterface.close();

        const [ command, ...args ] = parseCommand(line);
        const callback = operationManager[command] || errorHandler.invalidInput;

        callback(args);
    });

    readlineInterface.on('close', exit);
};
