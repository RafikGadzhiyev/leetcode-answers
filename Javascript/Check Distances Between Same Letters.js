/*
  You are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. 
  You are also given a 0-indexed integer array distance of length 26.

Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25).

In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. 
If the ith letter does not appear in s, then distance[i] can be ignored.

Return true if s is a well-spaced string, otherwise return false.
*/

var checkDistances = function(s, distance) {
    const data = {};
    for(let li in s){
        let l = s[li];
        data[l] = li - (data[l] || 0);
    }
    const keys = Object.keys(data);
    while(keys.length){
        const key = keys.pop();
        let si = key.charCodeAt(0) - 97;
        if(distance[si] !== data[key] - 1) return false;
    }
    return true;
};
