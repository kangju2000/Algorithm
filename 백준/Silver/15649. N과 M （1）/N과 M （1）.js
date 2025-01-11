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
  const [N, M] = input;

  const result = getPermutaions(
    new Array(N).fill(0).map((_, i) => i + 1),
    M
  );

  let str = "";

  result.forEach((res) => {
    str += res.join(" ") + "\n";
  });

  console.log(str);
}

function getPermutaions(arr, n) {
  if (n == 1) return arr.map((el) => [el]);

  const result = [];

  arr.forEach((value, index, originArr) => {
    const rest = [...originArr.slice(0, index), ...originArr.slice(index + 1)];

    const perms = getPermutaions(rest, n - 1);
    result.push(...perms.map((perm) => [value, ...perm]));
  });

  return result;
}
