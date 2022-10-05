 /*
You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.

 
*/

var divideArray = function(nums) {
    const data = {};
    for(let num of nums){
        data[num] = (data[num] || 0) + 1;
    }
    const keys = Object.keys(data);
    while(keys.length){
        let key = keys.pop();
        if(data[key] % 2 === 1) return false;
    }

    return true;
};
