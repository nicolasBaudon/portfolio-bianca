/**
 * Replace space for -
 * @param {*} str string to serialize
 * @returns 
 */
export const serializeString = (str) => str.toLowerCase().replaceAll(" ", "-");
