const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", processInput).on("close", () => {
  process.exit();
});

function processInput(line) {
  let num = Number(line);
  if (num === -1) {
    return;
  }

  const 약수 = [1];
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      약수.push(i);
      약수.push(num / i);
    }
  }

  const sum = 약수.reduce((acc, curr) => acc + curr, 0);

  if (num !== sum) {
    console.log(line, "is NOT perfect.");
    return;
  }

  console.log(line + " = " + 약수.sort((a, b) => a - b).join(" + "));
}
