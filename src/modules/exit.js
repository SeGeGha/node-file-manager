import { printMessage } from '../utils/printMessage.js';
import { user } from './userInfo.js';

export const exit = () => {
    printMessage(`Thank you for using File Manager, ${user.name}, goodbye!`);
    process.exit();
};
