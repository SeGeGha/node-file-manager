import { basename, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { createWriteStream, createReadStream } from 'fs';
import { createBrotliDecompress } from 'zlib';

import { resolveExtname } from './helpers/resolveExtname.js';

import { appData } from '../../appData.js';
import { errorHandler } from '../../errorHandler.js';

import { printMessage } from '../../../utils/printMessage.js';
import { exists } from '../../../utils/exists.js';

import { BROTLI_EXTNAME } from '../../../constants/index.js';

export const decompress = async (pathToFile, pathToDir) => {
    const originalPath = resolve(appData.cwd, resolveExtname(pathToFile));
    const fileName = basename(originalPath).replace(BROTLI_EXTNAME, '');
    const targetPath = resolve(appData.cwd, pathToDir, fileName);
    const timeLabel = `Finish decompression ${fileName} in`;

    printMessage('Start decompression ${basename}...');
    console.time(timeLabel);

    try {
        if (await exists(targetPath)) throw new Error();

        await pipeline(
            createReadStream(originalPath),
            createBrotliDecompress(),
            createWriteStream(targetPath)
        );

        console.timeEnd(timeLabel)
    } catch (error) {
        errorHandler.failedOperation();

    }
};
