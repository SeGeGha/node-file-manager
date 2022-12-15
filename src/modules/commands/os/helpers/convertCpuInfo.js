import { GHZ, CPU_SEPARATOR } from '../../../../constants/index.js';

const getDefaultCpuRateData = cpu => (cpu.speed / 1000).toFixed(2) + GHZ;

export const convertCpuInfo = cpu => {
    const [ model, rate = getDefaultCpuRateData(cpu) ] = cpu.model.split(CPU_SEPARATOR);

    return {
        model: model.trim(),
        rate: rate.trim(),
    };
};
