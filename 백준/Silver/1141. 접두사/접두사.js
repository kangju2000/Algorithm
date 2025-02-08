const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

function processInput(line) {
  input.push(line.trim());
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const [, ...arr] = input;
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b.length - a.length);

  const itemSet = [];
  for (const item of uniqueArr) {
    if (isNoPrefixItem(item, itemSet)) {
      itemSet.push(item);
    }
  }

  console.log(itemSet.length);
}

function isNoPrefixItem(item, itemSet) {
  for (const resItem of itemSet) {
    if (resItem.startsWith(item)) {
      return false;
    }
  }

  return true;
}
