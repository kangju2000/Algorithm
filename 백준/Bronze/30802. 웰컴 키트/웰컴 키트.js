function solution(input) {
  const [[N], arr, TP] = input;
  const [T, P] = TP;

  const minTShirtBundle = arr.reduce((acc, cur) => {
    acc += Math.ceil(cur / T);
    return acc;
  }, 0);
  const maxPenBundle = Math.floor(N / P);

  console.log(minTShirtBundle);
  console.log(maxPenBundle, N - P * maxPenBundle);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim().split(" ").map(Number));
}).on("close", function () {
  solution(input);
  process.exit();
});
