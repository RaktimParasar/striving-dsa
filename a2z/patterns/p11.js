// Pattern 11

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

let n = 5;
let string = "";

for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= i; j++) {
    string += (i + j) % 2 === 0 ? "1" : "0";
  }
  string += "\n";
}

console.log(string);
