/*
  You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
*/

var decrypt = function(code, k) {
    if(k === 0) return Array(code.length).fill(0);
    const sum = [code[0]];
    for(let i = 1; i < code.length; ++i){
        sum.push(sum[i - 1] + code[i]);
    }
    const result = [];
    for(let i = 0; i < code.length; ++i){
        let decrypted;
        if(k > 0){
            if(i + k < code.length) {
                decrypted = sum[i + k] - sum[i];
            }else {
                decrypted = sum[sum.length - 1] - sum[i] + sum[i + k - code.length];
            }
        }else {
            if(i <= k * -1) {
                decrypted = sum[sum.length - 1] - sum[sum.length - 1 + (i + k)] + (sum[i - 1] || 0)
            }else {
                decrypted = sum[i - 1] - sum[i + k - 1]
            }
        }
        result.push(decrypted);
    }

    return result;
};
