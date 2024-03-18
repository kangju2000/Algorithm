function solution(input) {
  for (let i = 1; i <= input[0]; i++) {
    const [m, n] = input[i * 2 - 1].split(" ").map(Number);
    const queue = input[i * 2].split(" ").map((item, i) => [i, Number(item)]);
    let count = 0;
    while (true) {
      const max = Math.max(...queue.map((item) => item[1]));
      if (queue[0][1] === max) {
        const [orderIndex] = queue.shift();
        count += 1;

        if (orderIndex === n) {
          console.log(count);
          break;
        }
      } else {
        queue.push(queue.shift());
      }
    }
  }
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
