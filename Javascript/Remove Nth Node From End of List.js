/*
  Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

var removeNthFromEnd = function(head, n) {
    if(n === 1 && !head.next) return null;
    let listLength = 0,
        a = head;

    while(a){
        listLength++;
        a = a.next;
    }


    let removeLength = listLength - n + 1;
    if(listLength === n) return head.next;
    let prev = null,
        b = head,
        currentNodeId = 1;

        while(b){
            if(currentNodeId === removeLength){ 
                let tmp = prev.next;
                prev.next = tmp.next;
                break;
            }
            currentNodeId++;
            prev = b;
            b = b.next
        }
        
    return head;
};
