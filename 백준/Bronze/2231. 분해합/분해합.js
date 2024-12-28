const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

function processInput(line) {
  N = Number(line);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const len = String(N).length;

  let result = N;
  for (let i = Math.max(0, N - len * 9); i < N; i++) {
    const M =
      i +
      String(i)
        .split("")
        .reduce((acc, curr) => acc + Number(curr), 0);

    if (M === N && result > i) {
      result = i;
    }
  }

  console.log(result === N ? 0 : result);
}
