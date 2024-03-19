function solution(input) {
  const [n, s] = input[0].split(" ").map(Number);
  const list = input[1].split(" ").map(Number);
  let count = 0;
  function subsequence(index = 0, sum = 0) {
    if (index === list.length) {
      if (sum === s) {
        count += 1;
      }
      return;
    }

    subsequence(index + 1, sum + list[index]);
    subsequence(index + 1, sum);
  }

  subsequence();
  console.log(s === 0 ? count - 1 : count);
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
