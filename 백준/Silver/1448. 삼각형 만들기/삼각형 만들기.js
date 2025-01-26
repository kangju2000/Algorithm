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

/**
 * 목표: 삼각형 세 변의 길이의 합의 최댓값
 *
 * 삼각형 만드는 조건
 * - 긴 변이 나머지 두변보다 짧아야 함
 *
 * N개 중 세 개를 뽑는 조합
 */
function solution() {
  const [N, ...arr] = input;

  const sortedArr = arr.sort((a, b) => b - a);

  for (let i = 0; i < N - 2; i++) {
    if (sortedArr[i] < sortedArr[i + 1] + sortedArr[i + 2]) {
      console.log(sortedArr[i] + sortedArr[i + 1] + sortedArr[i + 2]);
      return;
    }
  }

  console.log(-1);
}
