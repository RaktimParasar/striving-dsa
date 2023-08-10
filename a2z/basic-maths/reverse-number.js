// Given a number N reverse the number and print it.

let n = -123;
let x = 1234567890;
let y = 1234567809;

function reverseNumber(num) {
  let reverseNum = 0;
  while (num !== 0) {
    let lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = Math.trunc(num / 10);
  }
  return reverseNum;
}

console.log(reverseNumber(n));
console.log(reverseNumber(x));
console.log(reverseNumber(y));

// Time Complexity: O(n), where n is the length of the given number
// Space Complexity: O(1)
