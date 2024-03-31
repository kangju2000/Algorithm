function solution(input) {
  const [first, ...arr] = input;
  const [n, m] = first.split(" ").map(Number);
  const sortedArr = arr.map(Number).sort((a, b) => a - b);

  const isPossible = (mid) => {
    const count = sortedArr.reduce((acc, cur) => {
      acc += Math.floor(mid / cur);
      return acc;
    }, 0);

    return count >= m;
  };

  let lo = 1;
  let hi = sortedArr[n - 1] * m;
  let answer = hi;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (mid === answer) {
      break;
    }
    if (isPossible(mid)) {
      answer = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
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
