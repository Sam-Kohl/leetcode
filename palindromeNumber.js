/**
Parameters: int
Return: Boolean true/false 
Ex: Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
 */
var isPalindrome = function(x) {
//     Takes x, turns to string, splits into array, reverses, rejoins, turns back to int
    let reverse = +(String(x).split('').reverse().join(''));
//     Checks if x === reverse of x
    return x === reverse;
//    
};
