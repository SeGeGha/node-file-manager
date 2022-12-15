import { readdir } from 'fs/promises';

import { appData } from '../../appData.js';
import { errorHandler } from '../../errorHandler.js';

import { sortDirents } from './helpers/sortDirents.js';

import { DIRENT_TYPES } from '../../../constants/index.js';

export const ls = async () => {
    try {
        const content = await readdir(appData.cwd, { withFileTypes: true });
        const dirents = content.reduce((acc, dirent) => {
            const isFile = dirent.isFile();
            const isDirectory = dirent.isDirectory();

            if (isFile || isDirectory) acc.push({
                name: dirent.name,
                type: isFile ? DIRENT_TYPES.FILE : DIRENT_TYPES.DIRECTORY,
            });

            return acc;
        }, []);

        console.table(dirents.sort(sortDirents));
    } catch (error) {
        errorHandler.failedOperation();
    }
};
