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

function solution() {
  if (input.every((item) => item === 60)) {
    console.log("Equilateral");
  } else {
    const sum = input.reduce((acc, curr) => acc + curr, 0);

    if (sum === 180) {
      if (new Set(input).size === 2) {
        console.log("Isosceles");
      } else {
        console.log("Scalene");
      }
    } else {
      console.log("Error");
    }
  }
}
