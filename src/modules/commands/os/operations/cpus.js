import { cpus } from 'os';

import { convertCpuInfo } from '../helpers/convertCpuInfo.js';

export const executeCpusOperation = () => {
    const outputData = cpus().map(convertCpuInfo);

    console.dir(outputData);
};
