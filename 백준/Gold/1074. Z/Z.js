const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function processInput(line) {
  input = line.split(" ").map(Number);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const [N, r, c] = input;

  const recurse = (count = 0, n = N, row = r, col = c) => {
    const len = Math.pow(2, n);

    if (n === 1) {
      console.log(
        Array.from({ length: 4 }, (_, i) => count + i)[
          parseInt(`${row}${col}`, 2)
        ]
      );

      return;
    }

    if (row < len / 2 && col < len / 2) {
      recurse(count, n - 1, row, col);
    } else if (row < len / 2 && col >= len / 2) {
      recurse(count + (len * len) / 4, n - 1, row, col - len / 2);
    } else if (row >= len / 2 && col < len / 2) {
      recurse(count + (2 * len * len) / 4, n - 1, row - len / 2, col);
    } else if (row >= len / 2 && col >= len / 2) {
      recurse(count + (3 * len * len) / 4, n - 1, row - len / 2, col - len / 2);
    }
  };

  recurse();
}
