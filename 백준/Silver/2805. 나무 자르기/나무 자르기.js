function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const isPossible = (num) => {
    let count = arr.reduce((acc, cur) => {
      const diff = cur - num;
      if (diff > 0) {
        acc += diff;
      }

      return acc;
    }, 0);

    return count >= m;
  };

  let lo = 1;
  let hi = arr[arr.length - 1];
  let answer = 0;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (isPossible(mid)) {
      lo = mid + 1;
      answer = mid;
    } else {
      hi = mid - 1;
    }
  }

  console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  solution(input);
  process.exit();
});
