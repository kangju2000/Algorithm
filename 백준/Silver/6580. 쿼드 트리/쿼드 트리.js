const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let lineCount = 0;

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function parseHexToBinary(hex) {
  const binary = parseInt(hex, 16).toString(2).padStart(8, "0");
  return [...binary].reverse().map((bit) => (bit === "0" ? 1 : 0));
}

function processInput(line) {
  if (lineCount === 0) {
    const size = parseInt(line.split(" ")[2]);
    input.push(size);
  } else if (lineCount > 2 && line !== "};") {
    const hexValues = line.split(",").filter((v) => v.trim());
    const row = [];
    hexValues.forEach((hex) => {
      row.push(...parseHexToBinary(hex.trim()));
    });
    if (row.length > 0) input.push(row);
  }
  lineCount++;
}

function solution() {
  const size = input[0];
  const image = input.slice(1);

  console.log(size);
  console.log(compress(0, 0, size, image));
}

function isSameColor(x, y, length, image) {
  const color = image[y][x];
  for (let i = y; i < y + length; i++) {
    for (let j = x; j < x + length; j++) {
      if (image[i][j] !== color) return false;
    }
  }
  return true;
}

function compress(x, y, length, image) {
  if (length === 1 || isSameColor(x, y, length, image)) {
    return image[y][x] === 1 ? "W" : "B";
  }

  const half = length / 2;
  return (
    "Q" +
    compress(x, y, half, image) +
    compress(x + half, y, half, image) +
    compress(x, y + half, half, image) +
    compress(x + half, y + half, half, image)
  );
}
