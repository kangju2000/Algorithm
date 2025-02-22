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
  const [, arr, ...ijList] = input;

  const accSum = arr.reduce((acc, curr) => {
    if (acc.length === 0) {
      acc.push(curr);
    } else {
      acc.push(acc[acc.length - 1] + curr);
    }

    return acc;
  }, []);

  const result = [];
  for (const [i, j] of ijList) {
    result.push((accSum[j - 1] ?? 0) - (accSum[i - 2] ?? 0));
  }

  console.log(result.join("\n"));
}
