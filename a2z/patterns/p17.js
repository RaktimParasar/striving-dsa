// Pattern 17

//    A
//   ABA
//  ABCBA
// ABCDCBA

let n = 4;
let string = "";

for (let i = 1; i <= n; i++) {
  // space
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // letters
  let count = 0;
  let breakpoint = (2 * i - 1) / 2;
  for (let j = 1; j <= 2 * i - 1; j++) {
    string += `${String.fromCharCode(65 + count)}`;
    if (j <= breakpoint) {
      count++;
    } else {
      count--;
    }
  }
  // space
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  string += "\n";
}

console.log(string);
