const URL = "https://leetcode.com/problems/roman-to-integer/description/";
var romanToInt = function (s) {
    const dic = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let number = 0;
    for (let i = 0; i < s.length; ++i) {
        if ((i > 0 && (s[i] === 'V' || s[i] === 'X') && s[i - 1] === 'I') ||
            (i > 0 && (s[i] === 'L' || s[i] === 'C') && s[i - 1] === 'X') ||
            (i > 0 && (s[i] === 'D' || s[i] === 'M') && s[i - 1] === 'C')) {
            number += (dic[s[i]] - 2 * dic[s[i - 1]]);
        } else {
            number += dic[s[i]];
        }
    }
    return number;
};