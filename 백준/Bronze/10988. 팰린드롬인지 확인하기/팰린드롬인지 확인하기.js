function solution(line) {
  const len = line.length;
  let result = 1;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (line[i] !== line[len - i - 1]) {
      result = 0;
      break;
    }
  }

  console.log(result);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", solution).on("close", () => {
  process.exit();
});
