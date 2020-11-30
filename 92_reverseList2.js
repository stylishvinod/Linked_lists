// https://leetcode.com/problems/reverse-linked-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    
    let count = 1;
    
    let prev = null;
    let curr = head;
    let leftPrev = null;
    
    while(count < m && curr) {
        prev= curr;
        curr = curr.next;
        count++;
    }
    leftPrev = prev;
    let left  = curr
    
    while( count <= n  && curr) {
        let tmp = curr.next;
        curr.next= prev;
        prev = curr;
        curr= tmp;
        count++;
    } 
    
    if(leftPrev) {
        leftPrev.next = prev;
        left.next = curr;
    } else {
        left.next = curr;
        return prev;
    }
    
    
    
    return head;
    
};