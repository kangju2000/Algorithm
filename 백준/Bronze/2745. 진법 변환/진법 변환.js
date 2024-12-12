const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let M, N;

function processInput(line) {
  [M, N] = line.split(" ");
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  console.log(parseInt(M, Number(N)));
}
