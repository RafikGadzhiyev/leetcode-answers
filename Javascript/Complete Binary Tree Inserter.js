/*
A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

Design an algorithm to insert a new node to a complete binary tree keeping it complete after the insertion.

Implement the CBTInserter class:

CBTInserter(TreeNode root) Initializes the data structure with the root of the complete binary tree.
int insert(int v) Inserts a TreeNode into the tree with value Node.val == val so that the tree remains complete, 
and returns the value of the parent of the inserted TreeNode.
TreeNode get_root() Returns the root node of the tree.
*/

var CBTInserter = function(root) {
    this.root = root;
}

CBTInserter.prototype.insert = function(val) {
    let queue = [this.root];
    while(queue.length){
        const node = queue.shift();
        if(!node.left){
            node.left = new TreeNode(val);
            return node.val;
        }else queue.push(node.left);
        if(!node.right) {
            node.right = new TreeNode(val);
            return node.val;
        }else queue.push(node.right);
    } 
}; 

CBTInserter.prototype.get_root = function() {
    return this.root;
};
