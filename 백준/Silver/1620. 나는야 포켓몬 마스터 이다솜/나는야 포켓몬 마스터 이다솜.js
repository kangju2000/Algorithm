function solution(input) {
  const [NM, ...arr] = input;
  const [N, M] = NM.split(" ").map(Number);
  const dict = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (i < N) {
      dict.set(String(i + 1), arr[i]);
      dict.set(arr[i], String(i + 1));
    } else {
      console.log(dict.get(arr[i]));
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
