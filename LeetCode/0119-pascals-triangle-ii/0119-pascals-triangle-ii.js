/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let arr = [1];

    for (let i = 0; i < rowIndex; i++) {
        arr.push(1);

        for (let j = arr.length - 2; j > 0; j--) {
            arr[j] = arr[j] + arr[j - 1];
        }
    }

    return arr;
};