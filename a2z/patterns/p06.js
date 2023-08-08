// Pattern 6

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += `${j} `;
  }
  string += "\n";
}

console.log(string);
