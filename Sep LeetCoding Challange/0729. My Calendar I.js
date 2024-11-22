const URL = "https://leetcode.com/problems/my-calendar-i/description";
var MyCalendar = function() {
    this.array = [];
};

MyCalendar.prototype.book = function(start, end) {
    for(const[s,e] of this.array){
        if(start < e &&  end  > s){
            return false;
        }
    }
    this.array.push([start, end]);
    return true;
};