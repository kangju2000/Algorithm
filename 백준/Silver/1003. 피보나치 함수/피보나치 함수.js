function solution(input) {
  const cache = {
    0: [0, 1, 0],
    1: [1, 0, 1],
  };

  function fibo(n, zero = 0, one = 0) {
    if (n === 0) {
      return [0, 1, 0];
    }
    if (n === 1) {
      return [1, 0, 1];
    }
    if (cache[n] !== undefined) {
      return cache[n];
    }

    const a = fibo(n - 1);
    const b = fibo(n - 2);
    cache[n] = [a[0] + b[0], a[1] + b[1], a[2] + b[2]];

    return cache[n];
  }

  for (let i = 1; i <= input[0]; i++) {
    const [fiboNum, zero, one] = fibo(input[i]);
    console.log(`${zero} ${one}`);
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
