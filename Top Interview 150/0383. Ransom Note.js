const URL = "https://leetcode.com/problems/ransom-note/description";
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    for(let i = 0 ; i < magazine.length ; ++i){
        if(map.has(magazine[i])){
            map.set(magazine[i], map.get(magazine[i]) + 1 );
        }else{
            map.set(magazine[i], 1);
        }
    }
    for(let i = 0 ; i < ransomNote.length ; ++i){
        if(!map.has(ransomNote[i])) return false;
        map.set(ransomNote[i], map.get(ransomNote[i]) - 1 );
        if(map.get(ransomNote[i]) == 0){
            map.delete(ransomNote[i]);
        }
    }
    return true;
};