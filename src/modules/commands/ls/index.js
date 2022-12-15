import { readdir } from 'fs/promises';

import { user } from '../../userInfo.js';
import { errorHandler } from '../../errorHandler.js';

import { sortDirents } from './helpers/sortDirents.js';

import { FILE_TYPE, DIRECTORY_TYPE } from '../../../constants/index.js';

export const ls = async () => {
    try {
        const content = await readdir(user.cwd, { withFileTypes: true });
        const dirents = content.reduce((acc, dirent) => {
            const isFile = dirent.isFile();
            const isDirectory = dirent.isDirectory();

            if (isFile || isDirectory) acc.push({
                name: dirent.name,
                type: isFile ? FILE_TYPE : DIRECTORY_TYPE,
            });

            return acc;
        }, []);

        console.table(dirents.sort(sortDirents));
    } catch (error) {
        return errorHandler.failedOperation();
    }
};
