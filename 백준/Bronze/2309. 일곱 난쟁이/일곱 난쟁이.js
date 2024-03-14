const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number).sort((a, b) => a - b);

function sum(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}

const subtract = sum(arr) - 100;
const result = [];
for(let i = 0; i < 9; i++) {
    let restValue = subtract - arr[i]
    if(arr.includes(restValue)) {
        result.push(restValue);
        result.push(arr[i]);
        break;
    }
}

console.log(arr.filter(item => !result.includes(item)).join("\n"));