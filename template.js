const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let lineCount = 0;

function processInput(line) {
  if (lineCount === 0) {
    const [N, M] = line.split(" ").map(Number);
    input.push({ N, M });
  } else {
    input.push(line.split(" ").map(Number));
  }
  lineCount++;
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const { N, M } = input[0];

  // 여기에 문제 해결 로직을 구현합니다.

  console.log("결과를 여기에 출력하세요.");
}
