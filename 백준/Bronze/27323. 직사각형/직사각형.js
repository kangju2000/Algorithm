const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let A, B;
let lineCount = 0;

function processInput(line) {
  if (lineCount === 0) {
    A = Number(line);
  } else {
    B = Number(line);
  }

  lineCount++;
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  console.log(A * B);
}
