import { exit } from './commands/exit.js';
import { operationManager } from './operationManager.js';

import { user } from './userInfo.js';
import { errorHandler } from './errorHandler.js';

import { printMessage } from '../utils/printMessage.js';

export const init = () => {
    printMessage(`Welcome to the File Manager, ${user.name}!`);
    printMessage(`You are currently in ${user.homedir}`)

    process.stdin.on('data', data => {
        const [ command, ...args ] = data.toString().trim().split(' ');
        const callback = operationManager[command] || errorHandler.invalidInput;

        callback(args);
    });

    process.on('SIGINT', () => exit());
};
