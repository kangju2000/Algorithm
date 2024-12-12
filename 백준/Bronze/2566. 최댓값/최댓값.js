const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let row = 0;
let result = {
  max: 0,
  pos: [1, 1],
};

function solution(line) {
  row += 1;

  line.split(" ").forEach((item, index) => {
    const numberItem = Number(item);
    if (result.max < numberItem) {
      result = {
        max: numberItem,
        pos: [row, index + 1],
      };
    }
  });
}

rl.on("line", solution).on("close", () => {
  console.log(result.max);
  console.log(result.pos.join(" "));
  process.exit();
});
