// Pattern 20

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

let n = 5;
let string = "";
let space = 2 * n - 2;

for (let i = 1; i <= 2 * n - 1; i++) {
  let stars = i;
  if (i > n) stars = 2 * n - i;
  for (let j = 1; j <= stars; j++) {
    string += "*";
  }
  for (let j = 1; j <= space; j++) {
    string += " ";
  }
  for (let j = 1; j <= stars; j++) {
    string += "*";
  }
  string += "\n";
  if (i < n) space -= 2;
  else space += 2;
}

console.log(string);
