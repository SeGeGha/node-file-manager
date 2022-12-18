import { basename, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { createWriteStream, createReadStream } from 'fs';
import { createBrotliCompress } from 'zlib';

import { appData } from '../../appData.js';
import { errorHandler } from '../../errorHandler.js';

import { printMessage } from '../../../utils/printMessage.js';
import { exists } from '../../../utils/exists.js';

import { BROTLI_EXTNAME } from '../../../constants/index.js';

export const compress = async (pathToFile, pathToDir) => {
    const originalPath = resolve(appData.cwd, pathToFile);
    const fileName = basename(pathToFile);
    const targetPath = resolve(appData.cwd, pathToDir, fileName + BROTLI_EXTNAME);
    const timeLabel = `Finish compression ${basename} in`;

    printMessage('Finish compression ${basename}...');
    console.time(timeLabel);

    try {
        if (await exists(targetPath)) throw new Error();

        await pipeline(
            createReadStream(originalPath),
            createBrotliCompress(),
            createWriteStream(targetPath)
        );

        console.timeEnd(timeLabel)
    } catch (error) {
        errorHandler.failedOperation();

    }
};
