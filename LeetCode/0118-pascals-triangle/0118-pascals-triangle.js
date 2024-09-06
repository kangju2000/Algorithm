/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const arr = [[1]];

    for (let i = 1; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < arr[i - 1].length - 1; j++) {
            row.push(arr[i - 1][j] + arr[i - 1][j + 1])
        }
        arr.push([1, ...row, 1])
    }

    return arr;
};