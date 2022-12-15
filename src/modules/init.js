import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

import { appData } from './appData.js';

import { operationManager } from './commands/operationManager.js';

import { printMessage } from '../utils/printMessage.js';
import { parseCommandLine } from '../utils/parseCommandLine.js';
import { callFuse } from '../utils/callFuse.js';

import { EXIT_COMMAND } from '../constants/index.js';

const printCwdMessage = () => printMessage(`You are currently in ${appData.cwd}\n`);

export const init = () => {
    printMessage(`Welcome to the File Manager, ${appData.username}!`);
    printCwdMessage();

    const readlineInterface = createInterface({ input, output });

    readlineInterface.on('line', async (line) => {
        if (line === EXIT_COMMAND) readlineInterface.close();

        const [ command, args ] = parseCommandLine(line);
        const result = await callFuse(operationManager[command], args);
        if (result) printMessage(result);

        printCwdMessage();
    });

    readlineInterface.on('close', () => {
        printMessage(`Thank you for using File Manager, ${appData.username}, goodbye!`);
        process.exit();
    });
};
