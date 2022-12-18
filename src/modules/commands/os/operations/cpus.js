import { cpus as getCpus } from 'os';

import { convertCpuInfo } from '../helpers/convertCpuInfo.js';

export const cpus = () => {
    const outputData = getCpus().map(convertCpuInfo);

    console.dir(outputData);
};
