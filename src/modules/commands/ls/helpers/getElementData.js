import { join } from 'path';
import { stat } from 'fs/promises';

import { user } from '../../../userInfo.js';

import { FILE_TYPE, DIRECTORY_TYPE } from '../../../../constants/index.js';

export const getElementData = async (elementName) => {
    const path = join(user.cwd, elementName);
    const stats = await stat(path);

    return {
        name: elementName,
        type: stats.isFile() ? FILE_TYPE : DIRECTORY_TYPE,
    }
}