const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let N;
let lineCount = 0;

function processInput(line) {
  if (lineCount === 0) {
    N = Number(line);
    lineCount++;
  } else {
    input.push(line.split(" ").map(Number));
  }
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const parent = Array(N + 1).fill(0);
  const tree = Array.from({ length: N + 1 }, () => []);

  for (const [n1, n2] of input) {
    tree[n1].push(n2);
    tree[n2].push(n1);
  }

  const dfs = (node, par) => {
    parent[node] = par;
    for (const next of tree[node]) {
      if (next !== par) {
        dfs(next, node);
      }
    }
  };

  dfs(1, 0);

  console.log(parent.slice(2).join("\n"));
}
