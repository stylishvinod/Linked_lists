/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return head;
    
    let prev = null;;
    let curr = head;
    
    while(curr) {
        let tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }
    
    return prev;
    
};



var reverseList = function(head) {
    if(!head || !head.next) return head;
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};