const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [n, m, b] = input[0].trim().split(" ").map(Number);
const blockList = input
  .slice(1)
  .map((line) => line.trim().split(" ").map(Number))
  .flat()
  .sort((a, b) => b - a);
let result; // [time, height]
for (
  let goalHeight = blockList[0];
  goalHeight >= blockList[blockList.length - 1];
  goalHeight--
) {
  let time = 0;
  let remainBlock = b;
  for (const blockHeight of blockList) {
    const diff = goalHeight - blockHeight;
    if (diff < 0) {
      time += 2 * Math.abs(diff);
      remainBlock += Math.abs(diff);
    }
    if (diff > 0) {
      time += Math.abs(diff);
      remainBlock -= Math.abs(diff);
      if (remainBlock < 0) {
        break;
      }
    }
  }

  if (remainBlock >= 0 && (result === undefined || time < result[0])) {
    result = [time, goalHeight];
  }
}

console.log(result.join(" "));
