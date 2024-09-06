function solution(input) {
  const [N, M] = input[0];
  const arr = input[1];

  const sumList = [0];

  for (let i = 0; i < N; i++) {
    sumList.push(sumList[i] + arr[i]);
  }

  for (let i = 0; i < M; i++) {
    const [left, right] = input[i + 2];
    console.log(sumList[right] - sumList[left - 1]);
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.trim().split(" ").map(Number));
}).on("close", function () {
  solution(input);
  process.exit();
});
