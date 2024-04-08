function solution(input) {
  const [n, m, v] = input[0].split(" ");
  const adj = new Map();
  input.slice(1).forEach((node) => {
    const [a, b] = node.split(" ");
    adj.set(a, [...(adj.get(a) || []), b]);
    adj.set(b, [...(adj.get(b) || []), a]);
  });

  for (const [key, value] of adj) {
    adj.set(
      key,
      value.sort((a, b) => a - b)
    );
  }

  const visit = { dfs: {}, bfs: { [v]: true } };
  const result = { dfs: [v], bfs: [v] };

  const dfs = (here) => {
    visit.dfs[here] = true;
    for (const there of adj.get(here) || []) {
      if (visit.dfs[there]) {
        continue;
      }

      result.dfs.push(there);
      dfs(there);
    }
  };

  const bfs = (q) => {
    if (q.length === 0) {
      return;
    }

    const here = q.shift();
    for (const there of adj.get(here) || []) {
      if (visit.bfs[there]) {
        continue;
      }

      q.push(there);
      result.bfs.push(there);
      visit.bfs[there] = true;
    }

    bfs(q);
  };

  dfs(v);
  bfs([v]);

  console.log(result.dfs.join(" "));
  console.log(result.bfs.join(" "));
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  solution(input);
  process.exit();
});
