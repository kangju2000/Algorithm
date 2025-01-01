const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let M, N;
let lineCount = 0;

function processInput(line) {
  if (lineCount === 0) {
    const [n, m] = line.split(" ").map(Number);
    M = m;
    N = n;
  } else {
    input.push(line.split(""));
  }
  lineCount++;
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  let result = M * N;

  for (let i = 0; i <= M - 8; i++) {
    for (let j = 0; j <= N - 8; j++) {
      result = Math.min(
        getFirstBlack(input, { i, j }),
        getFirstWhite(input, { i, j }),
        result
      );
    }
  }

  console.log(result);
}

function getFirstWhite(arr, init) {
  let count = 0;
  for (let i = init.i; i < init.i + 8; i++) {
    for (let j = init.j; j < init.j + 8; j++) {
      if ((i + j) % 2 === 0 && arr[j][i] === "B") {
        count++;
      }

      if ((i + j) % 2 !== 0 && arr[j][i] === "W") {
        count++;
      }
    }
  }

  return count;
}

function getFirstBlack(arr, init) {
  let count = 0;
  for (let i = init.i; i < init.i + 8; i++) {
    for (let j = init.j; j < init.j + 8; j++) {
      if ((i + j) % 2 === 0 && arr[j][i] === "W") {
        count++;
      }

      if ((i + j) % 2 !== 0 && arr[j][i] === "B") {
        count++;
      }
    }
  }

  return count;
}
