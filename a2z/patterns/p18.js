// Pattern 18

// E
// DE
// CDE
// BCDE
// ABCDE

let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = i; j >= 1; j--) {
    string += `${String.fromCharCode(70 - j)}`;
  }
  string += "\n";
}

console.log(string);
