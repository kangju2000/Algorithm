function solution(input) {
  const [first, ...restArr] = input;
  const [n, m] = first.split(" ").map(Number);
  const board = restArr.map((item) => item.split("").map(Number));

  const movement = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
  ];

  const visit = Array.from({ length: n }).map((item) => Array(m).fill(false));

  const queue = [{ x: 0, y: 0, count: 1 }];

  let qIndex = 0;
  let result;

  while (queue[qIndex] !== undefined) {
    const pos = queue[qIndex++];
    if (pos.x === n - 1 && pos.y === m - 1) {
      result = pos.count;
    }

    for (let i = 0; i < 4; i++) {
      const x = pos.x + movement[i].x;
      const y = pos.y + movement[i].y;

      if (
        x < 0 ||
        x >= n ||
        y < 0 ||
        y >= m ||
        board[x][y] === 0 ||
        visit[x][y]
      ) {
        continue;
      }

      queue.push({ x, y, count: pos.count + 1 });
      visit[x][y] = true;
    }
  }

  console.log(result);
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
