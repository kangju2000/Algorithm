const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function processInput(line) {
  input.push(line.split(""));
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const maxLength = Math.max(...input.map((line) => line.length));

  let result = "";
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < 5; j++) {
      const item = input[j]?.[i];
      if (item != null) {
        result += item;
      }
    }
  }

  console.log(result);
}
