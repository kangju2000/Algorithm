const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function processInput(line) {
  input = line;
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const alphabetMap = new Map();
  let maxCount = 0;

  input
    .toLowerCase()
    .split("")
    .map((letter) => {
      if (alphabetMap.has(letter)) {
        alphabetMap.set(letter, alphabetMap.get(letter) + 1);
      } else {
        alphabetMap.set(letter, 1);
      }

      maxCount = Math.max(maxCount, alphabetMap.get(letter));
    });

  let result = "";

  for ([key, value] of alphabetMap.entries()) {
    if (value === maxCount) {
      result += key;
    }
  }

  if (result.length > 1) {
    console.log("?");
    return;
  }

  console.log(result.toUpperCase());
}
