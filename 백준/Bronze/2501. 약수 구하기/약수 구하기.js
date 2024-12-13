const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", processInput).on("close", () => {
  process.exit();
});

function processInput(line) {
  const [n, k] = line.split(" ").map(Number);

  const 약수 = new Set([1, n]);
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      약수.add(i);
      약수.add(n / i);
    }
  }

  if (약수.size < k) {
    console.log(0);
    return;
  }

  const sorted약수 = Array.from(약수).sort((a, b) => a - b);

  console.log(sorted약수[k - 1]);
}
