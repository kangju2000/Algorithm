const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function processInput(line) {
  input.push(line);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const [N, ...arr] = input;

  const sorted = [...new Set(arr)].sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    }

    if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i].charCodeAt() < b[i].charCodeAt()) {
          return -1;
        }

        if (a[i].charCodeAt() > b[i].charCodeAt()) {
          return 1;
        }
      }

      return 0;
    }

    return 1;
  });

  console.log(sorted.join("\n"));
}
