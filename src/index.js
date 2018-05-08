/**
 * Will output a one line string of the keys and values of the passed object
 *  in the format of `key: value, key:value...`.
 * @param obj Object to convert to a one line log
 * @returns Converted one line log
 */
const log = (obj = {}, config = {}) => {
  if (!config.separator) {
    config.separator = ", ";
  }

  if (Object.getOwnPropertyNames(obj).length === 0) {
    return "";
  }

  return Object.keys(obj)
    .reduce((list, key) => {
      const value = obj[key];
      list.push(`${key}: ${value}`);
      return list;
    }, [])
    .join(config.separator);
};

module.exports = log;
export default log;
