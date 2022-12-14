import { readdir } from 'fs/promises';

import { user } from '../../userInfo.js';
import { errorHandler } from '../../errorHandler.js';

import { getElementData } from './helpers/getElementData.js';
import { sortElements } from './helpers/sortElements.js';

export const ls = async () => {
    try {
        const content = await readdir(user.cwd);
        const elementsData = await Promise.all(content.map(getElementData));

        console.table(elementsData.sort(sortElements));
    } catch (error) {
        return errorHandler.failedOperation();
    }
};
