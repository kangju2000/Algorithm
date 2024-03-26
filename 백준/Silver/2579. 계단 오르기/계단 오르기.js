function solution(input) {
  const cache = {};

  const dp = (n) => {
    if (n <= 0) {
      return 0;
    }

    if (n === 1) {
      return input[1];
    }

    if (cache[n]) {
      return cache[n];
    }

    cache[n] = Math.max(
      input[n] + dp(n - 2),
      input[n] + input[n - 1] + dp(n - 3)
    );

    return cache[n];
  };

  console.log(dp(input[0]));
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
