const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let lineCount = 0;

function processInput(line) {
  if (lineCount === 0) {
    lineCount++;
    return;
  }

  const arr = line.split(" ").map(Number);
  if (arr.length === 3) {
    input.push([arr]);
    return;
  }

  input[input.length - 1].push(arr);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const tResult = [];
  for (const tc of input) {
    const [[M, N, K], ...pos] = tc;

    const grid = Array.from({ length: M }, () =>
      Array.from({ length: N }, () => 0)
    );

    for (const [i, j] of pos) {
      grid[i][j] = 1;
    }

    let count = 0;

    const dfs = (i = 0, j = 0) => {
      if (i < 0 || i >= M || j < 0 || j >= N) {
        return;
      }

      if (grid[i][j] === 1) {
        grid[i][j] = -1;
        dfs(i, j + 1);
        dfs(i, j - 1);
        dfs(i + 1, j);
        dfs(i - 1, j);
      }
    };

    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        if (grid[i][j] === 1) {
          dfs(i, j);
          count += 1;
        }
      }
    }
    tResult.push(count);
  }

  console.log(tResult.join("\n"));
}
