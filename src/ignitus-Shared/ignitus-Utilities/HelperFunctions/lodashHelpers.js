/*
  Few helper methods to edge cases
*/
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return Object.prototype.toString.call(value);
}

/*
  Utilities Methods
*/

export function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }
  const type = typeof value;

  if (type === 'boolean') return true;

  if (type === 'object' && Object.keys(value).length === 0) return true;

  if (type === 'string' && value.trim().length === 0) return true;

  return false;
}

export function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export function isString(value) {
  const type = typeof value;
  return (
    type === 'string'
    || (type === 'object'
      && value != null
      && !Array.isArray(value)
      && getTag(value) === '[object String]')
  );
}

export function isEqual(value, other) {
  if (value === other) return true;
  return JSON.stringify(value) === JSON.stringify(other);
}

export default {
  isEmpty,
  isObject,
  isString,
  isEqual,
};
