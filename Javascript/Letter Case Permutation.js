/*
  Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.
*/

var letterCasePermutation = function(s) {
    const result = [];
    const bt = (str = [], i = 0) => {
        if(str.length === s.length) {
            result.push(str.join``);
            return;
        }
        if(Number.isNaN(parseInt(s[i]))) {
            bt([...str, s[i].toUpperCase()], i + 1);
        }
            bt([...str, s[i].toLowerCase()], i + 1);
    }
    bt();

    return result;
};
