const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function processInput(line) {
  input = line.split(" ").map(Number);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const [a, b, c, d, e, f] = input;
  const x = (c * e - b * f) / (a * e - b * d);
  const y = (c * d - a * f) / (b * d - a * e);

  console.log(`${x} ${y}`);
}
