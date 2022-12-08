/*
  Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.


*/

var combine = function(n, k) {
    const result = [];
    const bt = (a = [], i = 1) => {
        if(a.length === k){
            result.push(a);
        }

        for(let j = i; j <= n; ++j){
            bt([...a, j], j + 1);
        }
    }
    bt();

    return result;
};
