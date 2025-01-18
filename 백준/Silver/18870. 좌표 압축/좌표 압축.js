const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function processInput(line) {
  input.push(line.split(" ").map(Number));
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const [N, arr] = input;

  const m = new Map();

  [...new Set(arr)].sort((a, b) => a - b).forEach((item, i) => m.set(item, i));

  console.log(arr.map((item) => m.get(item)).join(" "));
}
