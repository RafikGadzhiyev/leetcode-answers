/*
  Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
*/

var rangeSumBST = function(root, low, high) {
    let result = 0;;
    const queue = [root];
    while(queue.length){
        let length = queue.length;
        while(length--){
            let node = queue.shift();
            if(node.val >= low && node.val <= high)result += node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

    return result;
};
