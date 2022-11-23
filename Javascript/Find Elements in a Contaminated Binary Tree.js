/*
  Given a binary tree with the following rules:

root.val == 0
If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

Implement the FindElements class:

FindElements(TreeNode* root) Initializes the object with a contaminated binary tree and recovers it.
bool find(int target) Returns true if the target value exists in the recovered binary tree.
*/

var FindElements = function(root) {
    this.nums = [0];
    root.val = 0;

    const queue = [root];
    while(queue.length){
        let length = queue.length;
        while(length--){
            let node = queue.shift();
            if(node.left) {
                node.left.val = node.val * 2 + 1;
                this.nums.push(node.left.val);
                queue.push(node.left);
            }
            if(node.right){
                node.right.val = node.val * 2 + 2;
                this.nums.push(node.right.val);
                queue.push(node.right);
            }
        }
    }
};

FindElements.prototype.find = function(target) {
    let start = 0,
        end = this.nums.length - 1;
    while(start <= end ){
        let middle = Math.floor(start + (end - start) / 2);
        if(this.nums[middle] === target) return true;
        else if(this.nums[middle] > target) end = middle - 1;
        else start = middle + 1;
    }

    return false;
};
