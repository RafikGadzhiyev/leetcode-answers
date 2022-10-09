/*
  Given a string array words, 
  return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
*/

var commonChars = function(words) {
    const result = [];
    words = words.map((e) => [...e])
    for(let i = 0; i < words[0].length; ++i){
        let flag = true;
        for(let j = 1; j < words.length; ++j){
            let index = words[j].indexOf(words[0][i]);
            if(index === -1) {
                flag = false;
            }else {
                words[j][index] = '_';
            }
        }
        if(flag) result.push(words[0][i]);
    }

    return result;
};
