/*
  You are given an array of equal-length strings words. Assume that the length of each string is n.

Each string words[i] can be converted into a difference integer array difference[i] of length n - 1 
where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2. 
Note that the difference between two letters is the difference between their positions in the alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.

For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].
All the strings in words have the same difference integer array, except one. You should find that string.

Return the string in words that has different difference integer array.
*/

var oddString = function(words) {
    const data = {};
    for(let i = 0; i < words.length; ++i){
        let d = '';
        for(let j = 0; j < words[i].length - 1; ++j){
            d += words[i][j + 1].charCodeAt(0) - words[i][j].charCodeAt(0)+'-';
        }
        if(data[d]) data[d].push(words[i]);
        else data[d] = [words[i]];
    }
    const keys = Object.keys(data);
    while(keys.length){
        let key = keys.pop();
        if(data[key].length === 1)return data[key][0];
    }
};
