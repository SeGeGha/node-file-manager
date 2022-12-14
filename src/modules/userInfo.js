import { homedir } from 'os';

import { USERNAME_PREFIX, DEFAULT_USERNAME } from '../constants/index.js'

class User {
    constructor() {
        const userNameArg = process.argv.find(arg => arg.startsWith(USERNAME_PREFIX)) || '';
        const [ , userName = DEFAULT_USERNAME ] = userNameArg.split('=');

        this.__name = userName;
        this.__homedir = homedir();
        this.__cwd = this.__homedir;
    }

    get name () {
        return this.__name;
    }

    get homedir () {
        return this.__homedir;
    }

    get cwd () {
        return this.__cwd;
    }
}

export const user = new User();
