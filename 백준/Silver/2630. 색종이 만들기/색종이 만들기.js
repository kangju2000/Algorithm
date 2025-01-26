const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

function processInput(line) {
  input.push(line.split(" ").map(Number));
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

/**
 * 기저 조건:
 * - 잘라진 종이가 모두 하얀색
 * - 잘라진 종이가 모두 파란색
 * - 더이상 자를 수 없을 떄
 *
 * 구하는 값:
 * - 잘라진 하얀색 색종이 개수 + 파란색 색종이 개수
 */
function solution() {
  const [N, ...grid] = input;

  let white = 0;
  let blue = 0;

  function dfs(curGrid = grid) {
    const n = curGrid.length;

    if (n === 1 || checkFillGrid(curGrid)) {
      curGrid[0][0] === 1 ? blue++ : white++;
      return;
    }

    const sliced = slice4Grid(curGrid);

    sliced.forEach((slicedGrid) => dfs(slicedGrid));
  }

  dfs();

  console.log(`${white}\n${blue}`);
}

function checkFillGrid(grid) {
  let firstColor = grid[0][0];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] !== firstColor) {
        return false;
      }
    }
  }

  return true;
}

function slice4Grid(grid) {
  const n = grid.length;
  const sliced1 = Array.from({ length: n / 2 }, () => []);
  const sliced2 = Array.from({ length: n / 2 }, () => []);
  const sliced3 = Array.from({ length: n / 2 }, () => []);
  const sliced4 = Array.from({ length: n / 2 }, () => []);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i < n / 2) {
        if (j < n / 2) {
          sliced1[i].push(grid[i][j]);
        } else {
          sliced2[i].push(grid[i][j]);
        }
      } else {
        if (j < n / 2) {
          sliced3[i - n / 2].push(grid[i][j]);
        } else {
          sliced4[i - n / 2].push(grid[i][j]);
        }
      }
    }
  }

  return [sliced1, sliced2, sliced3, sliced4];
}
