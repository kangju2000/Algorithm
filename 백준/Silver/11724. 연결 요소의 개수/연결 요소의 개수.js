const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, M;
let graph;
let visited;
let count = 0;

rl.on("line", function (line) {
  if (!N) {
    [N, M] = line.split(" ").map(Number);
    graph = Array.from({ length: N + 1 }, () => []);
    visited = new Array(N + 1).fill(false);
  } else {
    const [u, v] = line.split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
    M--;

    if (M === 0) {
      rl.close();
    }
  }
}).on("close", function () {
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }
  console.log(count);
  process.exit();
});

function dfs(node) {
  visited[node] = true;
  for (let neighbor of graph[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor);
    }
  }
}
