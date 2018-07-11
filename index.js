/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = items => Array.from(Set(items));

module.exports = removeDuplicateItems;
