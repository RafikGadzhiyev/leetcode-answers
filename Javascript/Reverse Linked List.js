/*
  Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

var reverseList = function(head) {  
    const nodes = [];
    let a = head,
        b = head;
    while(head) {
        nodes.push(head.val);
        head = head.next;
    }

    for(let i = nodes.length - 1; i > -1; --i){
        a.val = nodes[i];
        a = a.next;
    }

    return b;
}

// Or

var reverseList = function(head) {  
  let pointer = head,
          prev = null;
      while(pointer){
          let next = pointer.next,
              current = pointer;

          pointer.next = prev;
          prev = pointer;
          pointer = next;
      }
      return prev;
}
