const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const wordList = [];
let lineCount = 0;
let N, M;

function processInput(line) {
  if (lineCount === 0) {
    const NM = line.split(" ").map(Number);
    N = NM[0];
    M = NM[1];
    lineCount++;
  } else {
    wordList.push(line);
  }
}

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});

function solution() {
  const wordMap = new Map();

  for (const word of wordList) {
    if (word.length >= M) {
      wordMap.set(word, (wordMap.get(word) ?? 0) + 1);
    }
  }

  const result = [...wordMap.keys()].sort((a, b) => {
    const countValue = wordMap.get(b) - wordMap.get(a);

    if (countValue !== 0) {
      return countValue;
    }

    const lengthValue = b.length - a.length;

    if (lengthValue !== 0) {
      return lengthValue;
    }

    return a.localeCompare(b);
  });

  console.log(result.join("\n"));
}
