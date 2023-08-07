// Pattern 7

//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

let n = 5;
let string = "";

for (let i = 0; i < n; i++) {
  // space
  for (let j = 0; j < n - i - 1; j++) {
    string += " ";
  }
  // star
  for (let j = 0; j < i * 2 + 1; j++) {
    string += "*";
  }
  // space
  for (let j = 0; j < n - i - 1; j++) {
    string += " ";
  }
  string += "\n";
}

console.log(string);
