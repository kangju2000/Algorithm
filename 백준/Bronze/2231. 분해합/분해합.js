function solution(input) {
  let sum;
  let result;
  for(let i = input-1; i>0; i--) {
    sum = i + String(i).split('').map(Number).reduce((acc, cur) => acc + cur, 0);
    if(sum === input) {
      result = i;
    } 
  }
  console.log(result ?? 0);
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout,
});

 
let input;

rl.on("line", function (line) {
    input = Number(line);
    rl.close();            
}).on("close", function () {
    solution(input)
    process.exit();
});