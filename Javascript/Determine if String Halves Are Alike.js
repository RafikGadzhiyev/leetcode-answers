/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.
*/

var halvesAreAlike = function(s) {
    let middle = Math.floor(s.length / 2),
        left = s.slice(0, middle),
        right = s.slice(middle);

    const regex = new RegExp(/[^aeiou]/gi);
    
    return left.replace(regex, '').length === right.replace(regex, '').length
};
