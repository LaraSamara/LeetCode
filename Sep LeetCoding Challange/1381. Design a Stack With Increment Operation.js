const URL = "https://leetcode.com/problems/design-a-stack-with-increment-operation/description";
var CustomStack = function(maxSize) {
    this.stack = [];
    this.capacity = maxSize;
};
CustomStack.prototype.push = function(x) {
    if(this.capacity > this.stack.length){
        this.stack.push(x);
    }
};
CustomStack.prototype.pop = function() {
    let value = -1;
    if(this.stack.length > 0){
        value = this.stack[this.stack.length-1];
        this.stack.pop();
    }
    return value;
};
CustomStack.prototype.increment = function(k, val) {
    let n = this.stack.length;
    if(this.stack.length >= k){
        n = k;
    }
    for(let i = 0 ; i < n ; ++i){
        this.stack[i] += val;
    }
};
