export const sortStrings = (firstString, secondString) => {
    if (firstString > secondString) {
        return 1;
    } else if (firstString < secondString) {
        return -1;
    }

    return 0;
};
