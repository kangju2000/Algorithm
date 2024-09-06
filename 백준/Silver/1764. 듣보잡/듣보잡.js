function solution(input) {
  const [NM, ...arr] = input;
  const [N, M] = NM.split(" ").map(Number);

  const [듣도, 보도] = arr.reduce(
    (acc, cur, index) => {
      acc[index < N ? 0 : 1].push(cur);

      return acc;
    },
    [[], []]
  );

  const len = arr.length - [...new Set(arr)].length;

  if (len === 0) {
    console.log(len);
    return;
  }

  const result = [];

  for (let i = 0; i < N; i++) {
    if (듣도.includes(보도[i])) {
      result.push(보도[i]);
    }

    if (result.length === len) {
      break;
    }
  }
  console.log(result.length);
  console.log(result.sort().join("\n"));
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
