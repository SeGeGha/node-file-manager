import { EOL } from 'os';

import { printMessage } from '../../../../utils/printMessage.js';

export const eol = () => printMessage(JSON.stringify(EOL));
