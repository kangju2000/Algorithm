const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

function processInput(line) {
  input.push(line.split(" ").map(Number));
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const [[N], arr] = input;
  const result = Array(N).fill(-1);

  for (let i = 0; i < N; i++) {
    let count = 0;

    for (let j = 0; j < N; j++) {
      if (result[j] === -1) {
        if (count === arr[i]) {
          result[j] = i + 1;
          break;
        }
        count++;
      }
    }
  }

  console.log(result.join(" "));
}
