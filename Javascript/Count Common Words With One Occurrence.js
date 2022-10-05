/*
  Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.
*/

var countWords = function(words1, words2) {
    const d1 = {};
    const d2 = {};
    let total = 0;

    for(let w1 of words1){
        if(!d1[w1]){
            d1[w1] = 1;
        }else d1[w1]++;
    }

    for(let w2 of words2){
        if(!d2[w2]){
            d2[w2] = 1;
        }else d2[w2] ++;
    }

    const keys = Object.keys(d1);
    while(keys.length){
        let key = keys.pop();
        if( d1[key] === d2[key] && d2[key] === 1) total++;
    }

    return total;
};
