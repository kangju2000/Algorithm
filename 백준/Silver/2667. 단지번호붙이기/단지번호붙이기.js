const EXIST_HOUSE = "1";
const NO_EXIST_HOUSE = "0";

function solution(input) {
  const [N, ...arr] = input;
  let count = 0;

  const visited = new Set();

  const countList = [];

  function dfs(x, y) {
    if (
      x < 0 ||
      y < 0 ||
      x >= arr.length ||
      y >= arr[0].length ||
      visited.has(`${x},${y}`)
    ) {
      return;
    }

    visited.add(`${x},${y}`);
    if (arr[x][y] === EXIST_HOUSE) {
      count += 1;
    } else {
      return;
    }

    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (visited.has(`${i},${j}`)) {
        continue;
      }

      if (arr[i][j] === EXIST_HOUSE) {
        dfs(i, j);
        countList.push(count);
        count = 0;
      }
    }
  }

  console.log(
    [countList.length, ...countList.sort((a, b) => a - b)].join("\n")
  );
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.trim().split(""));
}).on("close", function () {
  solution(input);
  process.exit();
});
