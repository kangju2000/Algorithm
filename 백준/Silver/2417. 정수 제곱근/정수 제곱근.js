function solution(n) {
  let lo = 0n;
  let hi = n;
  let answer = 0n;
  while (lo <= hi) {
    let mid = (lo + hi) / 2n;
    if (mid * mid >= n) {
      answer = mid;
      hi = mid - 1n;
    } else {
      lo = mid + 1n;
    }
  }

  console.log(Number(answer));
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = BigInt(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
