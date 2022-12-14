export const parseCommandLine = commandString => {
    const [ command, ...args ] = commandString.trim().split(' ');

    return [ command, args ];
};
