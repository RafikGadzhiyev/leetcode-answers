/*
  You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, 
some nodes of the two trees are overlapped while the others are not. 
You need to merge the two trees into a new binary tree. 
The merge rule is that if two nodes overlap, 
then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.
*/

var mergeTrees = function(root1, root2) {
    const d = (r1 = root1, r2 = root2) => {
        if(!r1 && !r2) return null;
        if(!r1) return r2;
        if(!r2) return r1;
        r1.val += r2.val;
        r1.left = d(r1.left, r2.left);
        r1.right = d(r1.right, r2.right);
        return r1;
    }
    let result = d();

    return result;
};
