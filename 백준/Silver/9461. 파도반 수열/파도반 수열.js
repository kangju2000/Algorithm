function solution(input) {
  const cache = {};

  // p(n) = p(n-3) + p(n-2)
  const dp = (n) => {
    if (n <= 3) {
      return 1;
    }

    if (cache[n]) {
      return cache[n];
    }

    cache[n] = dp(n - 3) + dp(n - 2);
    return cache[n];
  };

  for (let i = 1; i <= input[0]; i++) {
    console.log(dp(input[i]));
  }
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
