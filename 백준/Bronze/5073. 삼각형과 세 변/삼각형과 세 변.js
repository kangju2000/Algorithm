const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function processInput(line) {
  input.push(line.split(" ").map(Number));
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const result = [];
  input.slice(0, -1).forEach((arr) => {
    arr.sort((a, b) => a - b);
    if (arr[0] + arr[1] <= arr[2]) {
      result.push("Invalid");
      return;
    }

    const countMap = arr.reduce((acc, curr) => {
      acc.set(curr, (acc.get(curr) ?? 0) + 1);
      return acc;
    }, new Map());

    const maxCount = Math.max(...countMap.values());

    switch (maxCount) {
      case 3:
        result.push("Equilateral");
        break;
      case 2:
        result.push("Isosceles");
        break;
      case 1:
        result.push("Scalene");
        break;
      default:
        result.push("Invalid");
        break;
    }
  });

  console.log(result.join("\n"));
}
