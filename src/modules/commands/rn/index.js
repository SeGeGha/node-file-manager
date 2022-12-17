import { rename } from 'fs/promises';
import { resolve, dirname } from 'path';

import { appData } from '../../appData.js';
import { errorHandler } from '../../errorHandler.js';

import { exists } from '../../../utils/exists.js';

export const rn = async (pathToFile, newFileName) => {
    const oldPath = resolve(appData.cwd, pathToFile);
    const newPath = resolve(dirname(oldPath), newFileName);

    try {
        if (oldPath !== newPath && await exists(newPath)) throw new Error();

        await rename(oldPath, newPath);
    } catch (error) {
        errorHandler.failedOperation();
    }
};
