const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chess = [1, 1, 2, 2, 2, 8];

function solution(line) {
  const arr = line.split(" ");
  const result = [];

  arr.forEach((item, index) => result.push(chess[index] - item));

  console.log(result.join(" "));
}

rl.on("line", solution).on("close", () => {
  process.exit();
});
