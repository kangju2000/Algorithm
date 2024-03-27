function solution(input) {
  const [k, n] = input[0].split(" ").map(Number);
  const arr = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  const isPossible = (num) => {
    const count = arr.reduce((acc, cur) => {
      acc += Math.floor(cur / num);
      return acc;
    }, 0);

    return count >= n;
  };

  let lo = 1;
  let hi = arr[arr.length - 1];
  let answer = 0;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (isPossible(mid)) {
      answer = mid;
      lo = mid + 1;
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
