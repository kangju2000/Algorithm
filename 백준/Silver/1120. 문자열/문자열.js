const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

function solution(str) {
    const [a, b] = str;
    let diff = b.length;
    for(let i = 0; i <= b.length - a.length; i++) {
        let cnt = 0;
        for(let j = i; j < a.length + i; j++) {
            if(a[j - i] !== b[j]) cnt += 1;
        }
        if(cnt < diff) diff = cnt;
    }
    return diff;
}

console.log(solution(input));