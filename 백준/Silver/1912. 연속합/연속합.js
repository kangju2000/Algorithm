const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let flag = false;
const input = [];

function processInput(line) {
    if (!flag) {
        flag = true;
        return;
    }

    input.push(...line.split(' ').map(Number));
}

rl.on('line', processInput).on('close', () => {
    solution();
    process.exit();
});

function solution() {
    const dp = [...input];

    const recurse = (idx = 0) => {
        if (idx >= dp.length) {
            return;
        }

        if (idx !== 0) {
            const s = dp[idx - 1] + dp[idx];
            if (dp[idx] < s) {
                dp[idx] = s;
            }
        }

        recurse(idx + 1);
    };

    recurse();

    console.log(Math.max(...dp));
}