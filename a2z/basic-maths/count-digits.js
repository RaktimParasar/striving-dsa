// Count digits in a number
// Problem Statement: Given an integer N, write a program to count the number of digits in N.

// Example 1:
// Input: N = 12345
// Output: 5
// Explanation: N has 5 digits

let n = 12345;

// Solution 1
function countDigits(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
console.log(countDigits(n));

// Time Complexity: O(n) where n is the number of digits in the given integer
// Space Complexity: O(1)

// Solution 2
function countDigits1(num) {
  return num.toString().length;
}
console.log(countDigits1(n));

// Time Complexity: O(1)
// Space Complexity: O(1)
