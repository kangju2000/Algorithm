const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function processInput(line) {
  input.push(Number(line));
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const [M, N] = input;

  const 소수 = new Set([2]);
  let flag = false;
  for (let i = 2; i <= N; i++) {
    flag = false;
    for ([v] of 소수.entries()) {
      if (i % v === 0) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      소수.add(i);
    }
  }

  const arr = Array.from(소수).filter((v) => {
    return v >= M && v <= N;
  });

  if (arr.length === 0) {
    console.log(-1);
    return;
  }

  console.log(arr.reduce((acc, curr) => acc + curr, 0));
  console.log(arr[0]);
}
