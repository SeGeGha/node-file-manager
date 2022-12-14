import { sep } from 'path';

import { user } from '../../userInfo.js';

export const up = () => {
    const firstIndex = user.cwd.indexOf(sep);
    const lastIndex = user.cwd.lastIndexOf(sep);

    user.cwd = user.cwd.slice(0, lastIndex + Number(lastIndex === firstIndex));
};
