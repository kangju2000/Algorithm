const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function processInput(line) {
  input = Number(line);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  let sum = 0;

  for (let step = 1; ; step++) {
    if (sum + step >= input) {
      const sub = input - sum;
      const a = [step + 1 - sub, sub];

      console.log(step % 2 === 0 ? a.reverse().join("/") : a.join("/"));
      break;
    }
    sum += step;
  }
}
