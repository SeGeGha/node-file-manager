import { sortStrings } from '../../../../../utils/sortStrings.js';

import { DIRENT_PROPS } from '../../../../../constants/index.js';

const props = [ DIRENT_PROPS.TYPE, DIRENT_PROPS.NAME ];

export const sortDirents = (firstDirent, secondDirent) => {
    const results = props.map(prop => sortStrings(firstDirent[prop], secondDirent[prop]));

    return results.find(result => result !== 0) || 0;
};
