function solution(input) {}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  // input = line.trim().split(" ").map(Number);
  // input.push(line.trim());
}).on("close", function () {
  solution(input);
  process.exit();
});
