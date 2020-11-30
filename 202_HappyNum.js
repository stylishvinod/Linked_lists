// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n, fast = n
    
    while(fast !== 1 && getNext(fast) !== 1) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
        if(slow === fast) return false
          
    }
    
    return true;
}
    
    
    function getNext(num) {
        let sum = 0;
        
        while(num !== 0) {
        let digit = num %10;
        num = Math.floor(num/10);
            sum += digit * digit;
        }
        
        return sum;
    }
