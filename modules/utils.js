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
