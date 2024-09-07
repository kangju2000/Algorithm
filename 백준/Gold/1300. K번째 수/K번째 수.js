function solution(input) {
  const [N, k] = input;

  let lo = 1;
  let hi = N * N;
  let answer = 0;
  
  const isPossible = (mid) => {
    let sum = 0;

    for (let i = 1; i <= N; i++) {
      sum += Math.min(N, Math.floor(mid / i));
    }

    return sum >= k;
  };

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (isPossible(mid)) {
      hi = mid - 1;
      answer = mid;
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
