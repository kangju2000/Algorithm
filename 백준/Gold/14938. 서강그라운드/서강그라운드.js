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
  const [[n, m, r], tArr, ...path] = input;

  const graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < r; i++) {
    const [a, b, l] = path[i];

    graph[a - 1] = [...graph[a - 1], { node: b, len: l }];
    graph[b - 1] = [...graph[b - 1], { node: a, len: l }];
  }

  /**
   * 현재 노드를 2라고 가정하자. 수색 범위는 5이다.
   *
   * 그러면 나는 1, 3, 5 노드에 갈 수 있다.
   *
   * 1 노드에 도착했을 때에는, 수색 범위 2, value 7+5
   *  4 노드는 수색 범위 내에 없어서 불가능
   * 3 노드에 도착했을 때에는, 수색 범위 2, value 7+8
   * 5 노드에 도착했을 때에는, 수색 범위 1, value 7+3
   */

  const result = [];
  for (let curNode = 1; curNode <= n; curNode++) {
    const visited = Array.from({ length: n }, () => false);
    const 최대_수색범위 = Array.from({ length: n }, () => -1);
    const q = [{ nodes: graph[curNode - 1], 수색_범위: m }];
    let 총합 = tArr[curNode - 1];
    visited[curNode - 1] = true;

    while (q.length > 0) {
      const { nodes, 수색_범위 } = q.shift();

      for (const { node, len } of nodes) {
        if (!visited[node - 1] && 수색_범위 - len >= 0) {
          총합 += tArr[node - 1];
          q.push({ nodes: graph[node - 1], 수색_범위: 수색_범위 - len });
          visited[node - 1] = true;
        } else if (
          visited[node - 1] &&
          최대_수색범위[node - 1] < 수색_범위 - len
        ) {
          최대_수색범위[node - 1] = 수색_범위 - len;
          q.push({ nodes: graph[node - 1], 수색_범위: 수색_범위 - len });
        }
      }
    }

    result.push(총합);
  }

  console.log(Math.max(...result));
}
