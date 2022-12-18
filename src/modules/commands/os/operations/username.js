import { appData } from '../../../appData.js';

import { printMessage } from '../../../../utils/printMessage.js';

export const username = () => printMessage(appData.username);
