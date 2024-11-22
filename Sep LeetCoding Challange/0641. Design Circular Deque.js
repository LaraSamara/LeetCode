const URL = "https://leetcode.com/problems/design-circular-deque/description";
var MyCircularDeque = function(k) {
    this.queue = [];
    this.capacity = k;
};
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.queue.length === this.capacity) return false;
    this.queue.unshift(value);
    return true;
};
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.queue.length === this.capacity) return false;
    this.queue.push(value);
    return true;
};
MyCircularDeque.prototype.deleteFront = function() {
    if(this.queue.length == 0) return false;
    this.queue.shift();
    return true;
};
MyCircularDeque.prototype.deleteLast = function() {
    if(this.queue.length == 0) return false;
    this.queue.pop();
    return true;
};
MyCircularDeque.prototype.getFront = function() {
    if(this.queue.length == 0) return -1;
    return this.queue[0];
};
MyCircularDeque.prototype.getRear = function() {
    if(this.queue.length == 0) return -1;
    return this.queue[this.queue.length-1];
};
MyCircularDeque.prototype.isEmpty = function() {
    return this.queue.length === 0;
};
MyCircularDeque.prototype.isFull = function() {
    return this.queue.length === this.capacity;
};