const URL = "https://leetcode.com/problems/sum-of-prefix-scores-of-strings/description";
class TrieNode {
    constructor() {
        this.children = {};
        this.prefixCount = 0;
    }
};
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let curr = this.root;
        for (const char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
            curr.prefixCount++;
        }
    }
    getPreficScore(word) {
        let curr = this.root;
        let score = 0;
        for (const char of word) {
            if (!curr.children[char]) break;
            curr = curr.children[char];
            score += curr.prefixCount;
        }
        return score;
    }
};
var sumPrefixScores = function (words) {
    const trie = new Trie();
    for (const word of words) {
        trie.insert(word);
    }
    const count = words.map(word => trie.getPreficScore(word));
    return count;
};