const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
function processInput(line) {
  n = BigInt(line);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  if (n < 3n) {
    console.log(0);
  } else {
    console.log(((n * (n - 1n) * (n - 2n)) / 6n).toString());
  }
  console.log(3);
}
