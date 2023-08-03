// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    const result = [];
    const combs = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    const bt = (index = 0, currentString = '') => {
        if(index === digits.length) {
            result.push(currentString);
            return;
        }

        for(let i = 0; i < combs[digits[index]].length; ++i){
            bt(index + 1, currentString + combs[digits[index]][i]);
        }

    }
    
    bt();

    return result;
};
