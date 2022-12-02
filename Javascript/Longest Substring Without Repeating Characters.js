/*
  Given a string s, find the length of the longest 
substring
 without repeating characters.
*/

var lengthOfLongestSubstring = function(s) {
    if(s.length === 1) return 1;
    let currentLength = 0,
        maxLength = 0,
        letters = new Set(),
        left = 0,
        right = left + 1;
    
    while(right < s.length) {
        if(!letters.has(s[left])) {
            currentLength++;
            letters.add(s[left]);
        }
        if(!letters.has(s[right])) {
            currentLength++;
            letters.add(s[right]);
            right++;
        }else {
            maxLength = Math.max(maxLength, currentLength);
            currentLength = 0;
            left++;
            right = left + 1;
            letters.clear()
        }
    }

    return Math.max(currentLength, maxLength);
};
