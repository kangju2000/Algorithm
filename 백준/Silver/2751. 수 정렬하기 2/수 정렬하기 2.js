const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function processInput(line) {
  input.push(Number(line));
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const [N, ...arr] = input;

  console.log(arr.sort((a, b) => a - b).join("\n"));
}