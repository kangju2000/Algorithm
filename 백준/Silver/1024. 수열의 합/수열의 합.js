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
  const [N, L] = input;

  for (let i = L; i <= 100; i++) {
    const j = ((2 * N) / i - i + 1) / 2;
    if (Number.isInteger(j) && j >= 0) {
      const result = Array.from({ length: i }, (_, k) => Math.floor(j) + k);
      console.log(result.join(" "));
      return;
    }
  }

  console.log(-1);
}
