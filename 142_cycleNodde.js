// https://leetcode.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const cycleNode = getCycleNode(head);
    
    if(!cycleNode) return null;
   // console.log("vinod cycleNode", cycleNode);
    let start = head;
    let nodeIncycle = cycleNode;
    
    while(start !== nodeIncycle) {
        start = start.next;
        nodeIncycle = nodeIncycle.next;
    }
   
    return start;
    
};

const getCycleNode = (head) => {
  let slow = head;
    let fast =head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow) {
            return fast;
        }
    }  
    return null;
}