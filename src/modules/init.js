import { exit } from './commands/exit/index.js';
import { operationManager } from './commands/operationManager.js';

import { user } from './userInfo.js';
import { errorHandler } from './errorHandler.js';

import { printMessage } from '../utils/printMessage.js';
import { parseCommand } from '../utils/parseCommand.js';

export const init = () => {
    printMessage(`Welcome to the File Manager, ${user.name}!`);
    printMessage(`You are currently in ${user.homedir}`)

    process.stdin.on('data', chunk => {
        const [ command, ...args ] = parseCommand(chunk.toString());
        const callback = operationManager[command] || errorHandler.invalidInput;

        callback(args);
    });

    process.on('SIGINT', () => exit());
};
