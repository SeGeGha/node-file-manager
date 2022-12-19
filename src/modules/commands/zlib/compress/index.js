import { basename, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { createWriteStream, createReadStream } from 'fs';
import { createBrotliCompress, constants } from 'zlib';

import { appData } from '../../../appData.js';
import { errorHandler } from '../../../errorHandler.js';

import { printMessage } from '../../../../utils/printMessage.js';
import { exists } from '../../../../utils/exists.js';

import { BROTLI_EXTNAME } from '../../../../constants/index.js';

export const compress = async (pathToFile, pathToDir) => {
    const originalPath = resolve(appData.cwd, pathToFile);
    const fileName = basename(pathToFile);
    const targetPath = resolve(appData.cwd, pathToDir, fileName + BROTLI_EXTNAME);

    try {
        if (originalPath !== targetPath && await exists(targetPath)) throw new Error();

        const timeLabel = `Finish compression ${fileName} in`;

        console.time(timeLabel);
        process.stdin.pause();

        printMessage(`Start compression ${fileName}...`);

        await pipeline(
            createReadStream(originalPath),
            createBrotliCompress({
                params: {
                  [constants.BROTLI_PARAM_QUALITY]: 4,
                },
            }),
            createWriteStream(targetPath)
        );

        console.timeEnd(timeLabel)
    } catch (error) {
        errorHandler.failedOperation();
    } finally {
        process.stdin.resume();
    }
};
