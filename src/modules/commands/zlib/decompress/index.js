import { basename, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { createWriteStream, createReadStream } from 'fs';
import { createBrotliDecompress } from 'zlib';

import { resolveExtname } from './helpers/resolveExtname.js';

import { appData } from '../../../appData.js';
import { errorHandler } from '../../../errorHandler.js';

import { printMessage } from '../../../../utils/printMessage.js';
import { exists } from '../../../../utils/exists.js';

import { BROTLI_EXTNAME } from '../../../../constants/index.js';

export const decompress = async (pathToFile, pathToDir) => {
    const originalPath = resolve(appData.cwd, resolveExtname(pathToFile));
    const fileName = basename(originalPath).replace(BROTLI_EXTNAME, '');
    const targetPath = resolve(appData.cwd, pathToDir, fileName);

    try {
        if (originalPath !== targetPath && await exists(targetPath)) throw new Error();

        process.stdin.pause();

        printMessage(`Start decompression ${fileName}...`);

        await pipeline(
            createReadStream(originalPath),
            createBrotliDecompress(),
            createWriteStream(targetPath)
        );

        printMessage(`Finish decompression ${fileName}!`);
    } catch (error) {
        errorHandler.failedOperation();
    } finally {
        process.stdin.resume();
    }
};
