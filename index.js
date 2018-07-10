/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const distinctItems = new Set(items);
  return Array.from(distinctItems);
};

module.exports = removeDuplicateItems;
