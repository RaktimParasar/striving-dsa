// Pattern 4

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let n = 5;
let string = "";

for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    string += `${i} `;
  }
  string += "\n";
}

console.log(string);
