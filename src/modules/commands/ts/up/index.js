import { resolve } from 'path';

import { appData } from '../../../appData.js';

import { UP_INDICATOR } from '../../../../constants/index.js';

export const up = () => {
    appData.cwd = resolve(appData.cwd, UP_INDICATOR);
};

