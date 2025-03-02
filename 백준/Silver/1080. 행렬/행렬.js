const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let flag = false;
const input = [];

function processInput(line) {
    if (!flag) {
        input.push(line.split(' ').map(Number));
        flag = true;
        return;
    }
    input.push(line.split('').map(Number));
}

rl.on('line', processInput).on('close', () => {
    solution();
    process.exit();
});

function solution() {
    const [[N, M], ...grid] = input;

    const [A, B] = grid.reduce(
        (acc, curr, idx) => {
            acc[idx < N ? 0 : 1].push(curr);

            return acc;
        },
        [[], []]
    );

    let count = 0;

    if (N < 3 || M < 3) {
        console.log(isEqual(A, B) ? 0 : -1);
        return;
    }

    for (let i = 0; i <= N - 3; i++) {
        for (let j = 0; j <= M - 3; j++) {
            if (A[i][j] !== B[i][j]) {
                flip(A, i, j);
                count++;
            }
        }
    }

    console.log(isEqual(A, B) ? count : -1);
}

function flip(matrix, i, j) {
    for (let r = i; r < i + 3; r++) {
        for (let c = j; c < j + 3; c++) {
            matrix[r][c] = 1 - matrix[r][c];
        }
    }
}

function isEqual(A, B) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            if (A[i][j] !== B[i][j]) {
                return false;
            }
        }
    }
    return true;
}