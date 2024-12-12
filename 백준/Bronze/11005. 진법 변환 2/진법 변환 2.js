const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let M, N;

function processInput(line) {
  [M, N] = line.split(" ").map(Number);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  console.log(M.toString(N).toUpperCase());
}
