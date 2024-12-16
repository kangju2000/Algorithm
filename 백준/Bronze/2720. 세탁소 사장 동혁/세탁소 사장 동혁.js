const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let input = [];
let lineCount = 0;

function processInput(line) {
  if (lineCount === 0) {
    t = Number(line);
  } else {
    input.push(Number(line));
  }
  lineCount++;
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const money = {
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };

  input.forEach((C) => {
    let rest = C;
    const a = Math.floor(C / money.quarter);
    rest -= a * money.quarter;
    const b = Math.floor(rest / money.dime);
    rest -= b * money.dime;
    const c = Math.floor(rest / money.nickel);
    rest -= c * money.nickel;

    console.log(a, b, c, rest);
  });
}
