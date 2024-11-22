const URL = "https://leetcode.com/problems/my-calendar-ii/description";
var MyCalendarTwo = function() {
    this.calendar = [];
    this.overlap = [];
};
MyCalendarTwo.prototype.book = function(start, end) {
    for(const[s,e] of this.overlap){
        if(start < e && end > s){
            return false;
        }
    }
    for(const[s,e] of this.calendar){
        if(start < e && end > s){
            this.overlap.push([Math.max(s, start), Math.min(end, e)]);
        }
    }
    this.calendar.push([start,end]);
    return true;
};