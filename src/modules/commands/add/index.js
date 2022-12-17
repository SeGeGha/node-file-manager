import { appendFile } from 'fs/promises';
import { join } from 'path';

import { appData } from '../../appData.js';
import { errorHandler } from '../../errorHandler.js';

export const add = async (fileName) => {
    const path = join(appData.cwd, fileName);

    try {
        await appendFile(path, '', { flag: 'wx' });
    } catch (error) {
        errorHandler.failedOperation();
    }
};
