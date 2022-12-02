/*
  You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/

var connect = function(root) {
    if(!root) return root;
    const queue = [root];
    while(queue.length) {
        let length = queue.length,
            node = null;
        while(length--){
            node = queue.shift();
            node.next = queue[0];
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        node.next = null;
    }
    return root;
};
