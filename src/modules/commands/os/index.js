import { operationManager } from './operationManager.js';

import { execute } from '../../../utils/execute.js';

export const os = command => execute(operationManager[command]);
