// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if(!head) return head;
    let stack = [head];
    let prev = null;
    
    while(stack.length > 0) {
        let curr = stack.pop();
        let {next, child} = curr;
        
        // make next.prev to null and move to stack;
        if(next) {
            next.prev = null;
            stack.push(next);
        }
        
        // if child move that child to stack and make null to curr
        // make curr.next to child
        if(child) {
            curr.child = null;
            curr.next = child;
            stack.push(child);
        }
        
        curr.prev = prev;
        
        if(prev) {
            prev.next = curr;
        }
        
        prev = curr;
    }
    
    return head;
};