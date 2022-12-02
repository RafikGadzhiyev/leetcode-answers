/*
  Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements 
(it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

 
*/

var RandomizedSet = function() {
    this.set = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    let isExist = this.set.has(val);
    this.set.add(val);

    return isExist === false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    let isExist = this.set.has(val);
    this.set.delete(val);
    return isExist === true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
   const values = Array.from(this.set.values());

   return values[Math.floor(Math.random() * values.length)]
};
