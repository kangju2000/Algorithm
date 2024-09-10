function solution(input) {
  const [T, ...TCList] = input;

  const gridList = [];
  const cabbageList = [];

  for (let i = 0; i < TCList.length; i++) {
    if (TCList[i].length === 3) {
      const [rows, cols, total] = TCList[i];
      cabbageList.push([]);
      gridList.push(
        Array.from({ length: rows }, () => Array.from({ length: cols }).fill(0))
      );
      continue;
    }

    cabbageList[cabbageList.length - 1].push(TCList[i]);
    const [x, y] = TCList[i];
    gridList[gridList.length - 1][x][y] = 1;
  }

  gridList.forEach((grid, index) => {
    const visited = new Set();
    let count = 0;

    cabbageList[index].forEach(([x, y]) => {
      if (!visited.has(`${x},${y}`)) {
        count += 1;
        dfs(grid, x, y, visited);
      }
    });

    console.log(count);
  });
}

function dfs(grid, x, y, visited = new Set()) {
  if (
    x < 0 ||
    y < 0 ||
    x >= grid.length ||
    y >= grid[0].length ||
    visited.has(`${x},${y}`) ||
    grid[x][y] === 0
  ) {
    return;
  }

  visited.add(`${x},${y}`);

  dfs(grid, x + 1, y, visited);
  dfs(grid, x - 1, y, visited);
  dfs(grid, x, y + 1, visited);
  dfs(grid, x, y - 1, visited);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.trim().split(" ").map(Number));
}).on("close", function () {
  solution(input);
  process.exit();
});
