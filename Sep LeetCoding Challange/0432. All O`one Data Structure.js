const URL = "https://leetcode.com/problems/all-oone-data-structure/description";
var AllOne = function() {
    this.map = new Map();
};
AllOne.prototype.inc = function(key) {
    if(this.map.has(key)){
        this.map.set(key, this.map.get(key)+1);
    }else{
        this.map.set(key, 1);
    }
};
AllOne.prototype.dec = function(key) {
    if(this.map.has(key)){
        this.map.set(key, this.map.get(key)-1);
        if(this.map.get(key) === 0){
            this.map.delete(key);
        }
    }
};
AllOne.prototype.getMaxKey = function() {
    let word = "";
    let max = -(Infinity);
    for(const[k,v] of this.map){
        if(v > max){
            max = v;
            word = k;
        }
    }
    return word;
};
AllOne.prototype.getMinKey = function() {
    let word = "";
    let min = Infinity;
    for(const[k,v] of this.map){
        if(v < min){
            min = v;
            word = k;
        }
    }
    return word;
};