const input = [];

function processInput(line) {
  const [과목명, 학점, 등급] = line.split(" ");
  input.push({ 과목명, 학점: Number(학점), 등급 });
}

const 등급_과목평점 = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

function solution() {
  const { 학점X전공평점_총합, 학점_총합 } = input.reduce(
    (acc, { 학점, 등급 }) => {
      if (등급 === "P") {
        return acc;
      }
      const 과목평점 = 등급_과목평점[등급];

      return {
        학점X전공평점_총합: acc.학점X전공평점_총합 + 학점 * 과목평점,
        학점_총합: acc.학점_총합 + 학점,
      };
    },
    { 학점X전공평점_총합: 0, 학점_총합: 0 }
  );

  console.log(학점X전공평점_총합 / 학점_총합);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", processInput).on("close", () => {
  solution();
  process.exit();
});
