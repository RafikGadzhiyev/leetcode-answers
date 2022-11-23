/*
Given a string s of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

Notice that an empty string is also good.
*/

var makeGood = function(s) {
    let popIndicies = [1, 2];
    s = [...s];
    while(popIndicies[0] <= s.length - 1){
        let left = s[s.length - popIndicies[0]],
            right = s[s.length - popIndicies[1]];
        if(
            (left.toLowerCase() === right && left === left.toUpperCase()) ||
            (right.toLowerCase() === left && right === right.toUpperCase())
        ){
            const tmp = [];
            let counter = popIndicies[1];
            while(--counter - 1){
                tmp.push(s.pop());
            }
            s.pop();
            s.pop();
            s.push(...tmp.reverse());
            popIndicies = popIndicies.map((e, i) => {
                if(e == 2 && i == 0 || e == 3 && i == 1){
                    return e - 2 + 1;
                }
                if(e > 2){
                    return e - 2;
                }
                
                return e;
            })
        }else{
            popIndicies = popIndicies.map(e => e + 1)
        }
    }
    
    return s.join``;
};
