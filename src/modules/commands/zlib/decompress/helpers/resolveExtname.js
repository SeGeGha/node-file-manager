import { BROTLI_EXTNAME } from '../../../../../constants/index.js';

export const resolveExtname = pathToFile => pathToFile.endsWith(BROTLI_EXTNAME) ? pathToFile : pathToFile + BROTLI_EXTNAME;
