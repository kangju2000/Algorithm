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

const HEAVY_BAG = 5;
const LIGHT_BAG = 3;

function solution() {
  let minCount = input;

  const dp = Array.from({ length: input + 1 }).fill(input);

  const recurse = (a, count = 0) => {
    if (a > 0 && dp[a] <= count) {
      return;
    }

    if (a < 0) {
      return;
    }

    dp[a] = count;

    if (a === 0) {
      minCount = Math.min(minCount, count);
      return;
    }

    recurse(a - HEAVY_BAG, count + 1);
    recurse(a - LIGHT_BAG, count + 1);
  };

  recurse(input);

  console.log(minCount === input ? -1 : minCount);
}
