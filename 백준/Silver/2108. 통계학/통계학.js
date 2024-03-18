function solution(input) {
  const [n, ...arr] = input;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const [countObj, sum] = arr.reduce(
    (acc, cur) => {
      acc[0][cur] = (acc[0][cur] ?? 0) + 1;
      acc[1] += cur;
      return acc;
    },
    [{}, 0]
  );
  const 산술평균 = Math.round(Math.floor(Number(sum / n) * 10) / 10);
  const 중앙값 = arr.sort((a, b) => a - b)[Math.floor(n / 2)];
  const [a, b] = Object.entries(countObj).sort(([a, b], [c, d]) =>
    b == d ? Number(a) - Number(c) : d - b
  );
  const 최빈값 = a[1] === b?.[1] ? Number(b[0]) : Number(a[0]);
  const 범위 = max - min;

  console.log(
    `${산술평균 === 0 ? 0 : 산술평균}\n${중앙값}\n${최빈값}\n${범위}`
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
