const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function processInput(line) {
  input = line.split(" ").map(BigInt);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const [A, B, C] = input;

  function power(base, exp) {
    if (exp === 1n) {
      return base % C;
    }
    if (exp % 2n === 0n) {
      const a = power(base, exp / 2n) % C;
      return (a * a) % C;
    }

    const b = power(base, (exp - 1n) / 2n) % C;
    return (((b * b) % C) * base) % C;
  }

  console.log(power(A, B).toString());
}
