// https://leetcode.com/problems/swap-nodes-in-pairs/

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
var swapPairs = function(head) {
    if(!head) return head;
    
    let dummy = new ListNode(-1);
    dummy.next = head;
    
    let prev = dummy;
    let curr = head;
    
    while(curr && curr.next) {
      let first = curr;
        let second =  curr.next;
        
        prev.next = second;
        first.next = second.next;
        second.next = first;
        
        prev = first;
        curr = first.next
        
    }
    
    return dummy.next;
};