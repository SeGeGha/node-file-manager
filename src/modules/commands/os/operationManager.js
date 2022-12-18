import { eol } from './operations/eol.js';
import { cpus } from './operations/cpus.js';
import { username } from './operations/username.js';
import { homedir } from './operations/homedir.js';
import { architecture } from './operations/architecture.js';

import { OS_COMMAND_ARGUMENTS } from '../../../constants/index.js';

export const operationManager = {
    [OS_COMMAND_ARGUMENTS.EOL]: eol,
    [OS_COMMAND_ARGUMENTS.CPUS]: cpus,
    [OS_COMMAND_ARGUMENTS.HOMEDIR]: homedir,
    [OS_COMMAND_ARGUMENTS.USERNAME]: username,
    [OS_COMMAND_ARGUMENTS.ARCHITECTURE]: architecture,
};

