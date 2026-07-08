/**
 * Shared Utility Functions Module
 */

/**
 * Strips emoji prefix and trailing/leading whitespace from a string
 * for cleaner natural alphabetical comparison.
 * @param {string} str - The source string.
 * @returns {string} The cleaned string.
 */
export function cleanString(str) {
  if (!str) return '';
  return str.replace(/^[\s\p{Emoji}\u200d]+/u, '').trim();
}

/**
 * Compares two strings alphabetically, ignoring emojis and casing,
 * with natural number ordering.
 * @param {string} a - First string.
 * @param {string} b - Second string.
 * @returns {number} Comparison result (-1, 0, 1).
 */
export function compareStrings(a, b) {
  const cleanA = cleanString(a);
  const cleanB = cleanString(b);
  return cleanA.localeCompare(cleanB, undefined, { numeric: true, sensitivity: 'base' });
}

/**
 * High-order comparator to sort objects by a specified string property
 * alphabetically, ignoring emojis and casing.
 * @param {string} propName - The property name to sort by.
 * @returns {function} Comparator function.
 */
export function compareByProperty(propName) {
  return (a, b) => compareStrings(a[propName], b[propName]);
}

/**
 * Converts a string to Title Case, capitalizing the first letter of each word
 * including parts separated by hyphens or slashes.
 * @param {string} str - The source string.
 * @returns {string} The Title Cased string.
 */
export function toTitleCase(str) {
  if (!str) return '';
  return str
    .split(' ')
    .map((word) => {
      if (!word) return '';
      return word
        .split('/')
        .map((subword) => {
          return subword
            .split('-')
            .map((w) => {
              if (!w) return '';
              return w.charAt(0).toUpperCase() + w.slice(1);
            })
            .join('-');
        })
        .join('/');
    })
    .join(' ');
}
