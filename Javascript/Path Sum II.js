/*
  Given the root of a binary tree and an integer targetSum,
  return all root-to-leaf paths where the sum of the node values in the path equals targetSum. 
  Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
*/

var pathSum = function(root, targetSum) {
    const result = [];
    const dp = (r = root, t = targetSum, path = []) => {
        if(!r) return;
        if(!r.left && !r.right && t - r.val === 0) {
            result.push([...path, r.val]);
        }

        path.push(r.val);
        dp(r.left, t - r.val, path)
        dp(r.right, t - r.val, path)
        path.pop();
    }
    dp();

    return result;
};
