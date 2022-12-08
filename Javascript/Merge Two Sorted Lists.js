/*
 You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/
var mergeTwoLists = function(list1, list2) {
    let left = list1,
        right = list2,
        result = new ListNode(),
        resultPointer = result;
    while(left && right){
        let minValue = -1;
        if(left.val < right.val){
            minValue = left.val;
            left = left.next;
        }else {
            minValue = right.val;
            right = right.next;
        }            
        resultPointer.next = new ListNode(minValue);
        resultPointer = resultPointer.next;
    }

    if(left) resultPointer.next = left;
    if(right) resultPointer.next = right;
    
    return result.next;
};
