function solution(input) {
  if (input === 1 || input === 2) {
    console.log(input);
    return;
  }

  for (let i = 2; ; i++) {
    if (input <= 2 ** i) {
      console.log(2 ** i - (2 ** i - input) * 2);
      break;
    }
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on("line", function (line) {
  input = Number(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
