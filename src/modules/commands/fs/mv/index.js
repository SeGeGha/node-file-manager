import { cp } from '../cp/index.js';
import { rm } from '../rm/index.js';

export const mv = async (pathToFile, pathToDir) => {
    await cp(pathToFile, pathToDir);
    await rm(pathToFile);
};
