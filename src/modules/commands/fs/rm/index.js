import { rm as remove } from 'fs/promises';
import { resolve } from 'path';

import { appData } from '../../../appData.js';
import { errorHandler } from '../../../errorHandler.js';

export const rm = async (pathToFile) => {
    const path = resolve(appData.cwd, pathToFile);

    try {
        await remove(path);
    } catch (error) {
        errorHandler.failedOperation();
    }
};
