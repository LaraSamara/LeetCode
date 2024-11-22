const URL = "https://leetcode.com/problems/insert-delete-getrandom-o1/description";
var RandomizedSet = function() {
    this.set = new Set();
};
RandomizedSet.prototype.insert = function(val) {
    if(this.set.has(val)) return false;
    this.set.add(val);
    return true;
};
RandomizedSet.prototype.remove = function(val) {
    if(!this.set.has(val)) return false;
    this.set.delete(val);
    return true;
};
RandomizedSet.prototype.getRandom = function() {
    let items = Array.from(this.set);
    return items[Math.floor(Math.random() * items.length)]
};
