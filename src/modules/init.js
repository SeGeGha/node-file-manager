import { createInterface } from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

import { appData } from "./appData.js";

import { operationManager } from './commands/operationManager.js';

import { printMessage } from '../utils/printMessage.js';
import { parseCommandLine } from '../utils/parseCommandLine.js';
import { callFuse } from '../utils/callFuse.js';

import { EXIT_COMMAND } from '../constants/index.js';

export const init = () => {
    const { messages } = appData;

    printMessage(messages.start);
    printMessage(messages.cwd);

    const readlineInterface = createInterface({ input, output });

    readlineInterface.on('line', async (line) => {
        if (line === EXIT_COMMAND) readlineInterface.close();

        const [ command, args ] = parseCommandLine(line);

        await callFuse(operationManager[command], args);

        printMessage(appData.messages.cwd);
    });

    readlineInterface.on('close', () => {
        printMessage(messages.exit);
        process.exit();
    });
};
