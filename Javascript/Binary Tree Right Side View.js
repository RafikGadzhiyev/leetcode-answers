/*
  Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
*/

var rightSideView = function(root) {
    if(!root) return [];
    const nums = [];
    const result = [];
    const queue = [root];
    let startIndex = 0;
    while(queue.length){
        let currentLength = queue.length;
        nums.push([]);
        while(currentLength--){
            let node = queue.shift();
            nums[startIndex].push(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        startIndex++;
    }

    for(let num of nums){
        result.push(num.pop());
    }
    
    return result;
};
