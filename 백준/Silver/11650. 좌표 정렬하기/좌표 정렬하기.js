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
  const [N, ...arr] = input;

  const sorted = arr.sort(([x1, y1], [x2, y2]) => {
    if (x1 < x2) {
      return -1;
    }

    if (x1 === x2) {
      return y1 < y2 ? -1 : 1;
    }

    return 1;
  });

  let result = "";

  sorted.forEach((item) => (result += `${item.join(" ")}\n`));

  console.log(result);
}
