function solution(input) {
  const length = input.shift();
  if (length === 0) {
    console.log(0);
    return;
  }
  const ignoreCount = Math.round(length * 0.15);
  console.log(
    Math.round(
      input
        .sort((a, b) => a - b)
        .slice(ignoreCount, ...(ignoreCount === 0 ? [] : [-ignoreCount]))
        .reduce((acc, cur) => acc + cur, 0) /
        (length - ignoreCount * 2)
    )
  );
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  solution(input);
  process.exit();
});
