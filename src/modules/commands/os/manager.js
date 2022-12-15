import { executeEOLOperation } from './operations/eol.js';
import { executeCpusOperation } from './operations/cpus.js';
import { executeUserNameOperation } from './operations/username.js';
import { executeHomedirOperation } from './operations/homedir.js';
import { executeArchitectureOperation } from './operations/architecture.js';

import { OS_COMMAND_ARGUMENTS } from '../../../constants/index.js';

export const manager = {
    [OS_COMMAND_ARGUMENTS.EOL]: executeEOLOperation,
    [OS_COMMAND_ARGUMENTS.CPUS]: executeCpusOperation,
    [OS_COMMAND_ARGUMENTS.HOMEDIR]: executeHomedirOperation,
    [OS_COMMAND_ARGUMENTS.USERNAME]: executeUserNameOperation,
    [OS_COMMAND_ARGUMENTS.ARCHITECTURE]: executeArchitectureOperation,
};
