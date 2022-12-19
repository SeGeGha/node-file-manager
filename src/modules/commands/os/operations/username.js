import { userInfo } from 'os';

import { printMessage } from '../../../../utils/printMessage.js';

export const username = () => printMessage(userInfo().username);
