/*
Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
*/

var checkIfExist = function(arr) {
    // for(let i = 0; i < arr.length; ++i){
    //     for(let j = 0; j < arr.length; ++j){            
    //         if(i === j) continue;
    //         if(arr[i] === arr[j] / 2) return true;
    //     }
    // }
    
    // return false;
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; ++i){
        let target = arr[i] * 2,
        start = 0,
        end = arr.length,
        index = -1;
        while(start <= end){
            let middle = ~~(start + (end - start) / 2);
            if(arr[middle] === target) {
                index = middle;
                break;
            }else if(arr[middle] < target) start = middle + 1;
            else end = middle - 1;
        }
        if(index !== -1 && index !== i) return true;
    }

    return false;
};
