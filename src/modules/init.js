import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

import { appData } from './appData.js';

import { operationManager } from './commands/operationManager.js';

import { execute } from '../utils/execute.js';
import { printMessage } from '../utils/printMessage.js';
import { parseCommandLine } from '../utils/parseCommandLine.js';

import { EXIT_COMMAND } from '../constants/index.js';

export const init = () => {
    const { messages } = appData;

    printMessage(messages.start);
    printMessage(messages.cwd);

    const readlineInterface = createInterface({ input, output });

    readlineInterface.on('line', async (line) => {
        if (line === EXIT_COMMAND) readlineInterface.close();

        const [ command, argLine ] = parseCommandLine(line);

        try {
            await execute(operationManager[command], argLine);
        } finally {
            printMessage(appData.messages.cwd);
        }
    });

    readlineInterface.on('close', () => {
        printMessage(messages.exit);
        process.exit();
    });
};
