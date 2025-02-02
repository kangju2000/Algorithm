const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

function processInput(line) {
  input.push(line.split(" ").map(Number));
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const [, nArr, , mArr] = input;

  const nMap = new Map();

  for (const item of nArr) {
    nMap.set(item, (nMap.get(item) ?? 0) + 1);
  }

  let result = [];
  for (const item of mArr) {
    result.push(nMap.get(item) ?? 0);
  }

  console.log(result.join(" "));
}
