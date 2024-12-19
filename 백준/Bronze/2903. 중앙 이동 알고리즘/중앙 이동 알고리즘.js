const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
function processInput(line) {
  N = Number(line);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  let result = 2;
  for (let i = 0; i < N; i++) {
    result += result - 1;
  }

  console.log(result * result);
}
