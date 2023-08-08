// Pattern 16

// A
// B B
// C C C
// D D D D
// E E E E E

let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += `${String.fromCharCode(i + 64)}`;
  }
  string += "\n";
}

console.log(string);
