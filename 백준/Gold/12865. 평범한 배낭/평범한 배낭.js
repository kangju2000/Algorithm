const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let flag = false;
const input = [];

function processInput(line) {
    input.push(line.split(' ').map(Number));
}

rl.on('line', processInput).on('close', () => {
    solution();
    process.exit();
});

function solution() {
    const [[N, K], ...arr] = input;

    const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

    for (let i = 1; i <= N; i++) {
        const [W, V] = arr[i - 1];
        for (let j = 1; j <= K; j++) {
            dp[i][j] = j < W ? dp[i - 1][j] : Math.max(dp[i - 1][j], dp[i - 1][j - W] + V);
        }
    }

    console.log(dp[N][K]);
}