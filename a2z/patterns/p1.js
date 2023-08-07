// Pattern 1

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

let n = 5;
let string = "";

// external loop for rows
for (let i = 0; i < n; i++) {
  // internal loop for columns
  for (let j = 0; j < n; j++) {
    string += "* ";
  }
  // newline after each row
  string += "\n";
}

console.log(string);
