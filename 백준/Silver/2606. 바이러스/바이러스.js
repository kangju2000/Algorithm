function solution(input) {
  const [computerCount, lineCount, ...lines] = input.map((item, idx) => {
    if (idx <= 1) {
      return Number(item);
    }
    return item.split(" ").map(Number);
  });

  const graph = lines.reduce((acc, [from, to]) => {
    acc[from] = [...(acc[from] ?? []), to];
    acc[to] = [...(acc[to] ?? []), from];

    return acc;
  }, {});

  const q = [];
  let qIndex = 0;
  const visit = {};
  let count = 0;

  q.push(graph[1]);
  visit[1] = true;

  while (q[qIndex] !== undefined) {
    const computers = q[qIndex++];

    for (const computer of computers) {
      if (visit[computer]) {
        continue;
      }

      q.push(graph[computer]);
      visit[computer] = true;
      count += 1;
    }
  }

  console.log(count);
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
