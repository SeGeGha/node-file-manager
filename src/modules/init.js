import { exit } from './commands/exit.js';

import { user } from './userInfo.js';

import { printMessage } from '../utils/printMessage.js';

export const init = () => {
    printMessage(`Welcome to the File Manager, ${user.name}!`);
    printMessage(`You are currently in ${user.homedir}`)

    process.on('SIGINT', () => exit());
};
