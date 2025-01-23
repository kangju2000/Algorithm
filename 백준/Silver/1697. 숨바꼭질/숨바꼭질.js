const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function processInput(line) {
  input = line.split(" ").map(Number);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const [N, K] = input;
  const visited = Array.from({ length: 100_001 }, () => -1);

  const q = [[N, 0]];

  while (q.length !== 0) {
    const [curX, curDepth] = q.shift();

    if (curX === K) {
      console.log(curDepth);
      return;
    }

    if (visited[curX + 1] === -1 && curX + 1 >= 0 && curX + 1 <= 100_000) {
      q.push([curX + 1, curDepth + 1]);
      visited[curX + 1] = 1;
    }
    if (visited[curX - 1] === -1 && curX - 1 >= 0 && curX - 1 <= 100_000) {
      q.push([curX - 1, curDepth + 1]);
      visited[curX - 1] = 1;
    }
    if (visited[curX * 2] === -1 && curX * 2 >= 0 && curX * 2 <= 100_000) {
      q.push([curX * 2, curDepth + 1]);
      visited[curX * 2] = 1;
    }
  }
}
