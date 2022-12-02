/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

var middleNode = function(head) {
    let a = head,
        b = head;
    while(b) {
        b = b.next;
        if(!b){
            return a;
        }
        a = a.next;
        b = b.next;
    }

    return a;
};
