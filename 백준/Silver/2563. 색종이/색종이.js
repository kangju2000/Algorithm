/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2563                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: kangju2000 <boj.kr/u/kangju2000>            +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2563                           #+#        #+#      #+#    */
/*   Solved: 2024/12/05 02:18:57 by kangju2000    ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const input = [];
let lineIndex = 0;

function solution() {
  const coord = new Set();

  for (const [x, y] of input) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        coord.add(`${x + i}-${y + j}`);
      }
    }
  }

  console.log(coord.size);
}

function processInput(line) {
  if (lineIndex !== 0) {
    input.push(line.split(" ").map(Number));
  }
  lineIndex++;
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
