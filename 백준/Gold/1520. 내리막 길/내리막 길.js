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
  const [[M, N], ...grid] = input;

  const dp = Array.from({ length: M }, () => Array(N).fill(-1));

  function dfs(x = 0, y = 0) {
    if (x === M - 1 && y === N - 1) {
      return 1;
    }

    if (dp[x][y] != -1) {
      return dp[x][y];
    }

    dp[x][y] = 0;
    const curValue = grid[x][y];

    // 상
    if (y > 0 && curValue > grid[x][y - 1]) {
      dp[x][y] += dfs(x, y - 1);
    }
    // 하
    if (y < N - 1 && curValue > grid[x][y + 1]) {
      dp[x][y] += dfs(x, y + 1);
    }
    // 좌
    if (x > 0 && curValue > grid[x - 1][y]) {
      dp[x][y] += dfs(x - 1, y);
    }
    // 우
    if (x < M - 1 && curValue > grid[x + 1][y]) {
      dp[x][y] += dfs(x + 1, y);
    }

    return dp[x][y];
  }

  console.log(dfs());
}
