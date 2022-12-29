import { resolve } from 'path';
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

import { appData } from '../../appData.js';
import { errorHandler } from '../../errorHandler.js';

import { printMessage } from '../../../utils/printMessage.js';

export const hash = async (pathToFile) => {
    const path = resolve(appData.cwd, pathToFile);

    try {
        const content = await readFile(path, { encoding: 'utf8' });
        const hash = createHash('sha256').update(content).digest('hex');

        printMessage(hash);
    } catch (error) {
        errorHandler.failedOperation();
    }
};
