//Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
// You may return the answer in any order.

var combine = function(n, k) {
    const result = [];
    const bt = (current = 1,part = []) => {
        if(part.length === k){
            result.push(part.slice());
            return;
        }
        for(let i = current; i <= n; ++i ){
            part.push(i);
            bt(i + 1, part);
            part.pop()
        }
    }
    bt();

    return result;
};
