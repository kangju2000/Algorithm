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
  const [[V, E], ...nodes] = input;
  const dist = Array.from({ length: V + 1 }, () => Array(V + 1).fill(Infinity));

  for (let i = 1; i <= V; i++) {
    dist[i][i] = 0;
  }

  for (const [a, b, c] of nodes) {
    dist[a][b] = c;
  }

  for (let k = 1; k <= V; k++) {
    for (let i = 1; i <= V; i++) {
      for (let j = 1; j <= V; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  let min = Infinity;
  for (let i = 1; i <= V; i++) {
    for (let j = i; j <= V; j++) {
      if (
        dist[i][j] !== 0 &&
        dist[i][j] !== Infinity &&
        dist[j][i] !== 0 &&
        dist[j][i] !== Infinity
      ) {
        min = Math.min(min, dist[i][j] + dist[j][i]);
      }
    }
  }

  console.log(min === Infinity ? -1 : min);
}
