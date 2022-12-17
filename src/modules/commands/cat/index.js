import { createReadStream } from 'fs';
import { resolve } from 'path';

import { appData } from '../../appData.js';
import { errorHandler } from '../../errorHandler.js';

import { printMessage } from '../../../utils/printMessage.js';

export const cat = async (pathToFile) => {
    const path = resolve(appData.cwd, pathToFile);
    const readable = createReadStream(path);

    readable.pipe(process.stdout);

    try {
        await new Promise((resolve, reject) => {
            readable.on('end', () => {
                printMessage('\n');
                resolve();
            })
            readable.on('error', reject);
        });
    } catch (error) {
        errorHandler.failedOperation();
    }
};
