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
  const [[N, M], ...arr] = input;

  const [grid, posList] = arr.reduce(
    (acc, curr, idx) => {
      acc[idx < N ? 0 : 1].push(curr);
      return acc;
    },
    [[], []]
  );

  const accGrid = grid.reduce((acc, curr) => {
    acc.push(
      curr.reduce((acc2, curr2) => {
        if (acc2.length === 0) {
          acc2.push(curr2);
        } else {
          acc2.push(acc2[acc2.length - 1] + curr2);
        }

        return acc2;
      }, [])
    );

    return acc;
  }, []);

  const result = [];
  for (const [x1, y1, x2, y2] of posList) {
    const func = (rows, i, j) => {
      return (rows[j - 1] ?? 0) - (rows[i - 2] ?? 0);
    };

    let sum = 0;
    for (let i = x1 - 1; i <= x2 - 1; i++) {
      sum += func(accGrid[i], y1, y2);
    }

    result.push(sum);
  }

  console.log(result.join("\n"));
}
