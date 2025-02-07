const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

function processInput(line) {
  input = Number(line);
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const N = input;
  let k = 0;
  const countList = [3];

  while (true) {
    k += 1;
    const curCount = 2 * countList[countList.length - 1] + k + 3;
    if (curCount > N) {
      break;
    }

    countList.push(curCount);
  }

  const recurse = (n = N) => {
    if (countList.length === 0) {
      console.log(n === 1 ? "m" : "o");
      return;
    }

    const lastCount = countList.pop();

    // left
    if (n < lastCount) {
      recurse(n);
      return;
    }

    // center
    if (n < lastCount + countList.length + 4) {
      console.log(n - lastCount === 1 ? "m" : "o");
      return;
    }

    //right
    recurse(n - (lastCount + countList.length + 4));
  };

  recurse();
}
