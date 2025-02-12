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
  // 입력: 첫 줄 [N, M, k], 두번째 줄: costList, 그 이후 간선 정보
  const [[N, M, k], costList, ...nodes] = input;

  // 그래프 생성: 각 노드에 대해 { connected: [인접 노드들], cost: 해당 노드의 비용 }
  // -> 수정: 초기 노드 생성 시 cost를 costList[i]로 설정하여, 이후 재설정할 필요가 없도록 함.
  const graph = new Map(
    Array.from({ length: N }, (_, i) => [i + 1, { connected: [], cost: costList[i] }])
  );

  // 간선 정보로 그래프의 인접 리스트 채우기
  for (const [n1, n2] of nodes) {
    graph.get(n1).connected.push(n2);
    graph.get(n2).connected.push(n1);
  }

  const visited = new Set();
  let minTotalCost = 0;

  // 모든 노드를 순회하면서, 아직 방문하지 않은 노드가 있다면
  // 해당 노드가 포함된 연결 요소의 최소 비용을 구한 뒤 전체 비용에 더함.
  for (const [node, data] of graph.entries()) {
    if (!visited.has(node)) {
      // 수정: 연결 요소 전체의 최소 비용을 DFS로 구함.
      const compMin = dfs(node);
      minTotalCost += compMin;
    }
  }

  // 최종 비용이 k 이하이면 출력, 아니라면 "Oh no" 출력.
  if (minTotalCost <= k) {
    console.log(minTotalCost);
  } else {
    console.log("Oh no");
  }

  // DFS 함수: 현재 노드부터 시작해 연결 요소 내에서 최소 비용을 찾는다.
  // 수정: 기존 복잡한 minCost 인자 없이 단순 재귀로 최소값을 갱신.
  function dfs(curNode) {
    // 이미 방문한 노드는 재탐색하지 않음 → 방문했으면 높은 값(Infinity)을 반환해 최소값에 영향을 주지 않도록 함.
    if (visited.has(curNode)) return Infinity;
    visited.add(curNode);
    const { connected, cost } = graph.get(curNode);
    let compMin = cost; // 현재 노드의 비용으로 초기화
    for (const nextNode of connected) {
      compMin = Math.min(compMin, dfs(nextNode)); // 재귀적으로 연결 요소 내 최소 비용 갱신
    }
    return compMin;
  }
}