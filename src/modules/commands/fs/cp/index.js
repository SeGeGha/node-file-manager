import { createReadStream, createWriteStream } from 'fs';
import { basename, resolve } from 'path';

import { appData } from '../../../appData.js';
import { errorHandler } from '../../../errorHandler.js';

import { exists } from '../../../../utils/exists.js';

export const cp = async (pathToFile, pathToDir) => {
    const originalPath = resolve(appData.cwd, pathToFile);
    const targetPath = resolve(appData.cwd, pathToDir, basename(pathToFile));

    try {
        if (originalPath !== targetPath && await exists(targetPath)) throw new Error();

        const readable = createReadStream(originalPath);
        const writable = createWriteStream(targetPath);

        readable.pipe(writable);

        await new Promise((resolve, reject) => {
            readable.on('end', resolve);
            readable.on('error', reject);
            writable.on('error', reject);
        });

        return true;
    } catch (error) {
        errorHandler.failedOperation();

        return false;
    }
};
