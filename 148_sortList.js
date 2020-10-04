// https://leetcode.com/problems/sort-list/

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
var sortList = function(head) {
    return mergeSort(head);
};

const mergeSort = (head) => {
    if(!head || !head.next) {
        return head;
    }
    
    let slow = head;
    let fast = head.next;
    while(fast && fast.next) {
        slow = slow.next;
        fast= fast.next.next
    }
    
    let left = head;
    let right = slow.next;
    slow.next = null;
    
    let leftList = mergeSort(left);
    let rightList = mergeSort(right);
 //   console.log("vinod leftList", leftList)
  //  console.log("vinod rightList", rightList)
   return  mergeList(leftList, rightList);
    
}


const mergeList = (leftList, rightList) => {
    if(!leftList) { return rightList}
    
    if(!rightList) {return leftList; }
    let newList;
    if(leftList.val < rightList.val) {
        newList = leftList;
      //  console.log("vinod in if block", newList);
        newList.next = mergeList(leftList.next, rightList);        
    } else {
        newList = rightList;
      //  console.log("vinod in else block", newList);
        newList.next = mergeList(leftList, rightList.next);
    }
    return newList;
}