/*
  Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

A grandparent of a node is the parent of its parent if it exists.
*/

var sumEvenGrandparent = function(root) {
    let result = 0;
    const d = (r = root, parent = null, grand = null) => {
        if(!r) return;
        if(grand && grand.val % 2 === 0) result += r.val;
        d(r.left, r, parent);
        d(r.right, r, parent);
    }
    d();

    return result;
};
