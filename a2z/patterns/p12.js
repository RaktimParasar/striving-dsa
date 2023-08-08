// Pattern 12

// 1      1
// 12    21
// 123  321
// 12344321

let n = 4;
let string = "";
let space = 2 * (n - 1);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += `${j}`;
  }
  for (let j = 1; j <= space; j++) {
    string += "_";
  }
  for (let j = i; j >= 1; j--) {
    string += `${j}`;
  }
  string += "\n";
  space -= 2;
}

console.log(string);
