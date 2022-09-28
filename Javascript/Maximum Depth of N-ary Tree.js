//Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

var maxDepth = function(root) {
    if(!root) return 0;
    let depth = 0;
    const queue = [root];
    while(queue.length){
        let queueLength = queue.length;
        while(queueLength--){
            let first = queue.shift();
            if(first && first.children){
                queue.push(...first.children);
            }
        }
        depth++;
    }
    
    return depth;
};
