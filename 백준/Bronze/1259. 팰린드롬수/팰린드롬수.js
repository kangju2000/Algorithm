function solution(input) {
  input.forEach((value) => {
    if (value === "0") {
      return;
    }

    const length = value.length;
    if (length % 2 === 0) {
      printYesNo(
        value.slice(0, length / 2) ===
          reverseString(value.slice(length / 2, length))
      );
    } else {
      printYesNo(
        value.slice(0, Math.floor(length / 2)) ===
          reverseString(value.slice(Math.ceil(length / 2), length))
      );
    }
  });
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function printYesNo(condition) {
  console.log(condition ? "yes" : "no");
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  solution(input);
  process.exit();
});
