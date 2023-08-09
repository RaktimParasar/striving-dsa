// Pattern 19

// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *
// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *

let n = 5;
let string = "";
let space1 = 0;
let space2 = 2 * (n - 1);

for (let i = 1; i <= n; i++) {
  // star
  for (let j = n; j >= i; j--) {
    string += "*";
  }
  // space
  for (let j = 1; j <= space1; j++) {
    string += " ";
  }
  // star
  for (let j = n; j >= i; j--) {
    string += "*";
  }
  string += "\n";
  space1 += 2;
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += "*";
  }
  for (let j = 1; j <= space2; j++) {
    string += " ";
  }
  for (let j = i; j >= 1; j--) {
    string += "*";
  }
  string += "\n";
  space2 -= 2;
}

console.log(string);
