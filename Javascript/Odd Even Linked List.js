/*
  Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.
*/

var oddEvenList = function(head) {
    const nums = [];
    let listPointer = head;
    while(listPointer){
        nums.push(listPointer.val);
        listPointer = listPointer.next;
    }
    
    const odd = [];
    const even = [];
    for(let i = 0; i < nums.length; ++i){
        if((i + 1) % 2 === 0){
            even.push(nums[i]);
        }else{
            odd.push(nums[i]);
        }
    }
    const newOrder = [...odd, ...even];
    let index = 0;
    listPointer = head;
    while(listPointer){
        listPointer.val = newOrder[index];
        index++;
        listPointer = listPointer.next;
    }
    
    return head;
};
