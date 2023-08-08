// Pattern 13

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let n = 5;
let string = "";
let num = 1;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += `${num} `;
    // increase the number by 1 in each step
    num += 1;
  }
  string += "\n";
}

console.log(string);
