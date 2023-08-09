// Pattern 22

// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

let n = 4;
let string = "";

for (let i = 0; i < 2 * n - 1; i++) {
  for (let j = 0; j < 2 * n - 1; j++) {
    let top = i;
    let left = j;
    let right = 2 * n - 2 - j;
    let down = 2 * n - 2 - i;
    string += `${n - Math.min(Math.min(top, down), Math.min(left, right))} `;
  }
  string += "\n";
}

console.log(string);
