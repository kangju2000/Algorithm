function solution(input) {
  const [[n, m], ...arr] = input.map((item, i) => {
    if (i === 0) {
      return item.split(" ").map(Number);
    }
    return Number(item);
  });

  const sortedArr = arr.sort((a, b) => a - b);

  const isPossible = (mid) => {
    const count = sortedArr.reduce((acc, cur) => {
      acc += Math.ceil(cur / mid);
      return acc;
    }, 0);
    return count <= n;
  };

  let lo = 1;
  let hi = sortedArr[m - 1];
  let answer = hi;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
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