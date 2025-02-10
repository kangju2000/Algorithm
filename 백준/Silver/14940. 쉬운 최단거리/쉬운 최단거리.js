const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const visited = [];
const answer = [];
let startPos;

let iterCount = -1;

let n, m;
function processInput(line) {
  if (iterCount === -1) {
    const nm = line.split(" ").map(Number);

    n = nm[0];
    m = nm[1];
    iterCount++;
    return;
  }

  const lineResult = line.split(" ").map((item, i) => {
    const numberItem = Number(item);

    if (numberItem === 0) {
      return 0;
    }

    if (numberItem === 2) {
      startPos = [iterCount, i];
    }

    return -1;
  });

  visited.push(lineResult);
  answer.push(lineResult);

  iterCount++;
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const q = [{ pos: startPos, dist: 0 }];

  answer[startPos[0]][startPos[1]] = 0;

  while (q.length > 0) {
    const { pos, dist } = q.shift();

    if (pos[0] - 1 >= 0 && visited[pos[0] - 1][pos[1]] === -1) {
      q.push({ pos: [pos[0] - 1, pos[1]], dist: dist + 1 });
      answer[pos[0] - 1][pos[1]] = dist + 1;
    }
    if (pos[1] - 1 >= 0 && visited[pos[0]][pos[1] - 1] === -1) {
      q.push({ pos: [pos[0], pos[1] - 1], dist: dist + 1 });
      answer[pos[0]][pos[1] - 1] = dist + 1;
    }
    if (pos[0] + 1 < n && visited[pos[0] + 1][pos[1]] === -1) {
      q.push({ pos: [pos[0] + 1, pos[1]], dist: dist + 1 });
      answer[pos[0] + 1][pos[1]] = dist + 1;
    }
    if (pos[1] + 1 < m && visited[pos[0]][pos[1] + 1] === -1) {
      q.push({ pos: [pos[0], pos[1] + 1], dist: dist + 1 });
      answer[pos[0]][pos[1] + 1] = dist + 1;
    }
  }

  console.log(answer.map((item) => item.join(" ")).join("\n"));
}
