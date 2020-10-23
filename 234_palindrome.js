

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head) return true;
    
    // find middle of list
    let fast = head;
    let slow = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let firstHalfEnd = slow;
    let secondhaldStart = reverseList(firstHalfEnd);
    
    let start = head;
    
    while(secondhaldStart && slow) {
        if(start.val !== secondhaldStart.val) return false;
        start = start.next;
        secondhaldStart = secondhaldStart.next;
    }
    
    return true;
};


function reverseList(head) {
    let prev = null;
    let curr = head;
    
    while(curr) {
        let tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }
    
    return prev;
    
}