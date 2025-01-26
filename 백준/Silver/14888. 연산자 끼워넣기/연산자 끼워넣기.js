const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let input = [];
let lineCount = 0;

function processInput(line) {
  if (lineCount === 0) {
    N = Number(line);
  } else {
    input.push(line.split(" ").map(Number));
  }
  lineCount++;
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

const OPERATOR = {
  PLUS: "+",
  MINUS: "-",
  MULTIPLY: "x",
  DIVISION: "÷",
};

/**
 * 연산자는 수열의 개수 - 1 만큼 사용 가능함.
 * -> 순열을 통해 모든 결과를 종합하여 최댓값, 최솟값을 구하는 것이 목표
 */
function solution() {
  const [numberArr, operatorLengthList] = input;
  const result = [];

  const operatorList = operatorLengthList.reduce((acc, curr, index) => {
    switch (index) {
      case 0:
        acc.push(...Array.from({ length: curr }).fill(OPERATOR.PLUS));
        break;
      case 1:
        acc.push(...Array.from({ length: curr }).fill(OPERATOR.MINUS));
        break;
      case 2:
        acc.push(...Array.from({ length: curr }).fill(OPERATOR.MULTIPLY));
        break;
      case 3:
        acc.push(...Array.from({ length: curr }).fill(OPERATOR.DIVISION));
        break;
    }

    return acc;
  }, []);

  const visited = Array.from({ length: operatorList.length }).fill(-1);

  function permutation(current = []) {
    if (current.length === operatorList.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < operatorList.length; i++) {
      if (visited[i] === -1) {
        visited[i] = 1;
        current.push(operatorList[i]);
        permutation(current);
        current.pop();
        visited[i] = -1;
      }
    }
  }

  permutation();
  const [max, min] = result.reduce(
    (acc, curr) => {
      const res = operate(numberArr, curr);

      if (res > acc[0]) {
        acc[0] = res;
      }

      if (res < acc[1]) {
        acc[1] = res;
      }

      return acc;
    },
    [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
  );

  console.log(`${max}\n${min}`);
}

function operate(arr, operatorList) {
  return operatorList.reduce((acc, operator, index) => {
    switch (operator) {
      case OPERATOR.PLUS:
        acc += arr[index + 1];
        break;
      case OPERATOR.MINUS:
        acc -= arr[index + 1];
        break;
      case OPERATOR.MULTIPLY:
        acc *= arr[index + 1];
        break;
      case OPERATOR.DIVISION:
        acc = parseInt(acc / arr[index + 1]);
        break;
    }

    return acc;
  }, arr[0]);
}
