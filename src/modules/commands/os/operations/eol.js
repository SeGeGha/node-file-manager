import { EOL } from 'os';

import { printMessage } from '../../../../utils/printMessage.js';

export const executeEOLOperation = () => printMessage(JSON.stringify(EOL));
