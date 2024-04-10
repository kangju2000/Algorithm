function solution(input) {
  const [first, ...restArr] = input;
  const [m, n] = first.split(" ").map(Number);
  const board = restArr.map((item) => item.split(" ").map(Number));

  const movement = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
  ];

  const q = [];
  let qIndex = 0;
  const vis = Array.from({ length: n }).map(() => Array(m).fill(false));
  let result;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (board[x][y] === 1) {
        q.push({ x, y, date: 0 });
        vis[x][y] = true;
      }
    }
  }

  while (q[qIndex] !== undefined) {
    /**
     * NOTE: shift()는 O(n) 시간복잡도를 가지므로 총 시간복잡도는 O(n^2)이 된다.
     * deque 방식 또는 배열을 let으로 선언 후 새로운 큐를 할당하는 방식으로 해결해야 한다.
     */
    // const pos = q.shift();
    const pos = q[qIndex++];

    result = pos.date;

    for (let i = 0; i < 4; i++) {
      const x = pos.x + movement[i].x;
      const y = pos.y + movement[i].y;

      if (x >= n || x < 0 || y < 0 || y >= m) {
        continue;
      }

      if (board[x][y] === -1 || vis[x][y]) {
        continue;
      }

      vis[x][y] = true;
      board[x][y] = 1;
      q.push({ x, y, date: pos.date + 1 });
    }
  }

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (board[x][y] === 0) {
        result = -1;
      }
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
