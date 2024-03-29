function solution(input) {
  const nArr = input[1].split(" ").map(Number);
  const mArr = input[3].split(" ").map(Number);

  const cardMap = new Map();
  let answer = "";
  nArr.forEach((item) => cardMap.set(item, true));
  mArr.forEach((item) => (answer += `${!!cardMap.get(item) ? 1 : 0} `));
  console.log(answer.trimEnd());
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
