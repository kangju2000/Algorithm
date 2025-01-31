const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
const input = [];
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
  const teamScoreArr = combination(N, N / 2).map((indices) =>
    sumOfIndices(input, indices)
  );

  let minDiff = 100;

  for (let i = 0; i < teamScoreArr.length / 2; i++) {
    const curDiff = Math.abs(
      teamScoreArr[i] - teamScoreArr[teamScoreArr.length - 1 - i]
    );

    if (minDiff > curDiff) {
      minDiff = curDiff;
    }
  }

  console.log(minDiff);
}

function combination(n, k) {
  const result = [];

  const numberArr = Array.from({ length: n }, (_, i) => i);

  const recurse = (arr = [], curIndex = 0) => {
    if (arr.length === k) {
      result.push([...arr]);
      return;
    }

    for (let i = curIndex; i < n; i++) {
      recurse([...arr, numberArr[i]], i + 1);
    }
  };

  recurse();

  return result;
}

function sumOfIndices(grid, indices) {
  let sum = 0;

  for (let i = 0; i < indices.length; i++) {
    for (let j = i + 1; j < indices.length; j++) {
      sum += grid[indices[i]][indices[j]] + grid[indices[j]][indices[i]];
    }
  }

  return sum;
}
