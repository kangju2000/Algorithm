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
  let result = 1;
  let minAddress = 0;

  while (1) {
    const maxAddress = 1 + 3 * result * (result - 1);
    if (minAddress < input && input <= maxAddress) {
      break;
    }
    minAddress = maxAddress;
    result += 1;
  }
  console.log(result);
}
