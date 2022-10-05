/*
  Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
*/

var findWords = function(words) {
    const result = [];
    const bases = [ 'qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    for(let i = 0; i < words.length; ++i){
        let base = bases[bases.findIndex(r => r.includes(words[i].toLowerCase()[0]))],
            flag = true;
        for(let j = 1; j < words[i].length; ++j){
            if(base && !base.includes(words[i].toLowerCase()[j])){
                flag = false;
                break;
            };
        }
        if(flag){
            result.push(words[i]);
        }
    }

    return result;
};
