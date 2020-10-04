
// https://leetcode.com/problems/middle-of-the-linked-list/
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
var middleNode = function(head) {
    // we have to use two points
    
    // slow pointer & fast pointer
    
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
};