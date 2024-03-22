function solution(input) {
  const cache = {};

  const dp = (n) => {
    if (n <= 2) {
      return n;
    }

    if (cache[n] !== undefined) {
      return cache[n] % 10007;
    }

    cache[n] = (dp(n - 1) + dp(n - 2)) % 10007;

    return cache[n];
  };

  console.log(dp(input));
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = Number(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
