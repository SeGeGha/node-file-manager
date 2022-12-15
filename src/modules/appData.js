import { homedir } from 'os';

import { USERNAME_PREFIX, DEFAULT_USERNAME } from '../constants/index.js'

class AppData {
    constructor() {
        const userNameArg = process.argv.find(arg => arg.startsWith(USERNAME_PREFIX)) || '';
        const [ , userName = DEFAULT_USERNAME ] = userNameArg.split('=');

        this.__name = userName;
        this.__homedir = homedir();
        this.__cwd = this.__homedir;
    }

    get username () {
        return this.__name;
    }

    get homedir () {
        return this.__homedir;
    }

    set cwd (cwd) {
        this.__cwd = cwd;
    }

    get cwd () {
        return this.__cwd;
    }

    get messages () {
        return {
            start: `Welcome to the File Manager, ${this.username}!`,
            exit: `Thank you for using File Manager, ${this.username}, goodbye!`,
            cwd: `You are currently in ${appData.cwd}`,
        }
    }
}

export const appData = new AppData();
