// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

var minDiffInBST = function(root) {
    let result = Number.MAX_SAFE_INTEGER;
    const nums = [];
    const ds = (r = root) => {
        if(!r) return ;
        nums.push(r.val);
        ds(r.left);
        ds(r.right);
    }
    ds();
    nums.sort((a, b) => a - b);
    for(let i = 1; i < nums.length; ++i){
        result = Math.min(Math.abs(nums[i] - nums[i - 1]), result)
    }
    return result;
};
