import { manager } from './manager.js';

export const os = command => manager[command]();
