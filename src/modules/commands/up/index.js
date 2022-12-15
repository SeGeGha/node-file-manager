import { resolve } from 'path';

import { appData } from '../../appData.js';

export const up = () => {
    appData.cwd = resolve(appData.cwd, '..');
};

