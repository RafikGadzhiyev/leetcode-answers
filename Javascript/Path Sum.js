/*
  Given the root of a binary tree and an integer targetSum,
  return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/

var hasPathSum = function(root, targetSum) {
    let result = false;
    const dp = (r = root, t = targetSum) => {
        if(!r) return;
        if(!r.left && !r.right && t - r.val === 0) result = true;
        dp(r.left, t - r.val);
        dp(r.right, t - r.val);
    }

    dp();
    return result;
};
