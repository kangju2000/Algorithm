function solution(input) {
  let currentIndex;

  for (let i = 0; i < 3; i++) {
    if (!isNaN(input[i])) {
      currentIndex = Number(input[i]) + 3 - i;
      break;
    }
  }

  const isMultiple3 = currentIndex % 3 === 0;
  const isMultiple5 = currentIndex % 5 === 0;

  console.log(
    isMultiple3 && isMultiple5
      ? "FizzBuzz"
      : isMultiple3 && !isMultiple5
      ? "Fizz"
      : !isMultiple3 && isMultiple5
      ? "Buzz"
      : currentIndex
  );
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
