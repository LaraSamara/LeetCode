const URL = "https://leetcode.com/problems/extra-characters-in-a-string/description";
class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = false;
    }
};
class Trie {
    constructor(words) {
        this.root = new TrieNode();
        for (const word of words) {
            let curr = this.root;
            for (const c of word) {
                if (!curr.children.has(c)) curr.children.set(c, new TrieNode());
                curr = curr.children.get(c);
            }
            curr.word = true;
        }
    }
};
var minExtraChar = function (s, dictionary) {
    let memo = new Map();
    memo.set(s.length, 0);
    let trie = new Trie(dictionary).root;
    function DFS(i) {
        if (memo.has(i)) return memo.get(i);
        res = 1 + DFS(i + 1);
        let curr = trie;
        for (let j = i; j < s.length; ++j) {
            if (!curr.children.has(s[j])) break;
            curr = curr.children.get(s[j]);
            if (curr.word) res = Math.min(res, DFS(j + 1));
        }
        memo.set(i, res);
        return res;
    }
    return DFS(0);
};
// Another Solu
var _minExtraChar = function(s, dictionary) {
    const set = new Set(dictionary);
    const memo = new Map();
    memo.set(s.length, 0);
    function DFS(i){
        if(memo.has(i)) return memo.get(i);
        res = 1 + DFS(i+1);
        for(let j = i ; j < s.length ; ++j){
            if(set.has(s.substring(i, j+1))){
                res = Math.min(res, DFS(j+1));
            }
        }
        memo.set(i, res);
        return res;
    }
    return DFS(0);
};