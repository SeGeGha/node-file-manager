import { arch } from 'os';

import { printMessage } from '../../../../utils/printMessage.js';

export const executeArchitectureOperation = () => printMessage(arch());
