// Pattern 15

// A B C D E
// A B C D
// A B C
// A B
// A

let n = 5;
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += `${String.fromCharCode(65 + j)}`;
  }
  string += "\n";
}

console.log(string);
