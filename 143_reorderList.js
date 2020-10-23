// https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head) return;
    
    let middleElement = middleOfList(head);
    let reverseList = getReversedList(middleElement);
    
    
    let first = head;
    let second = reverseList
    while(second.next) {
        let tmp = first.next;
        first.next = second;
        first = tmp;
        
        tmp = second.next;
        second.next = first;
        second = tmp
    }
};


function middleOfList(head) {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

function getReversedList(head) {
    let prev = null;
    let curr = head;
    
    while(curr) {
        let tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp
    }
    
    return prev;
}