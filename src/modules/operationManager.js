import { exit } from "./commands/exit.js";

import { COMMANDS } from '../constants/index.js'

export const operationManager = {
    [COMMANDS.EXIT]: exit
};
