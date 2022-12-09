/*
  Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.

A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.
*/

// Version with loop
var maxAncestorDiff = function(root) {
    let result = -1;
    const d = (r = root, v = []) => {
        if(!r) return;
        for(let n of v){
            result = Math.max(result, Math.abs(n.val - r.val));
        }
        v.push(r);
        d(r.left, v);
        d(r.right, v);
        v.pop();
    }    
    d();

    return result;
};
// optimized solution
var maxAncestorDiff = function(root) {
    let result = -1;
    const d = (r = root, min = Infinity, max = -Infinity) => {
        if(!r){
            result = Math.max(result, Math.abs(min - max))
            return;
        };
        min = Math.min(min, r.val);
        max = Math.max(max, r.val);
        d(r.left, min, max);
        d(r.right, min, max);
    }    
    d();

    return result;
};
