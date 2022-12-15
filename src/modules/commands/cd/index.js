import { resolve } from 'path';
import { readdir } from 'fs/promises';

import { appData } from '../../appData.js';
import { errorHandler } from '../../errorHandler.js';

export const cd = async (pathToDir) => {
    const cwd = resolve(appData.cwd, pathToDir);

    try {
        await readdir(cwd);

        appData.cwd = cwd;
    } catch (error) {
        errorHandler.failedOperation();
    }
};
