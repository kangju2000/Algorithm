function solution(input) {
  const [first, ...arr] = input;
  const [n, c] = first.split(" ").map(Number);
  const sortedArr = arr.sort((a, b) => a - b);

  const isPossible = (mid) => {
    const { count } = sortedArr.reduce(
      (acc, 현재_공유기, idx) => {
        if (idx === 0) {
          return acc;
        }

        // 두 공유기 사이의 거리가 mid보다 크거나 같은 경우 + 1
        if (현재_공유기 - acc.기준_공유기 >= mid) {
          acc = { 기준_공유기: 현재_공유기, count: acc.count + 1 };
        }

        return acc;
      },
      { 기준_공유기: sortedArr[0], count: 1 }
    );

    return count >= c;
  };

  let lo = 0;
  let hi = sortedArr[n - 1] - sortedArr[0];
  let answer = 0;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
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
