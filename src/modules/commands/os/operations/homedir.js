import { appData } from '../../../appData.js';

import { printMessage } from '../../../../utils/printMessage.js';

export const executeHomedirOperation = () => printMessage(appData.homedir);
