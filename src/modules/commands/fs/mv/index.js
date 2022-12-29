import { cp } from '../cp/index.js';
import { rm } from '../rm/index.js';

export const mv = async (pathToFile, pathToDir) => {
    const isCopied = await cp(pathToFile, pathToDir);
    if (isCopied) await rm(pathToFile);
};
