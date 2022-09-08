/*
*Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.
*/

const findTarget = function (root, k) {

    const nums = [];
    let dp = (node = root) => {
        if (!node) return;
        nums.push(node.val);
        dp(node.left);
        dp(node.right);
    }

    dp();
    nums.sort((a, b) => a - b);
    let start = 0,
        end = nums.length - 1;
    while (start < end) {
        let sum = nums[start] + nums[end];
        if (sum === k) return true;
        else if (sum < k) start++;
        else end--;
    }
    return false;

};