/**

00 01 02 03
10 11 12 13
20 21 22 23
30 31 32 33

arr[i][j]라고 할 때, j < i+1 의 값은 i+1, j >= i+1 의 값은 j+1의 값임

2 -> 5

left % n
2 % 3 0 나머지 2 02

right % n
5 % 3 1 나머지 2 12

02 10 11 12

12 20 21 22
3 2 2 3
7 % 4   1, 나머지 3

1234223433344444

반복 돌려서
1일때는 1이 한번
2일때는 2가 두번
... 이렇게 해서 배열 채우기
n이 좀 크다.. 
*/

function solution(n, left, right) {
    const l = [Math.floor(left/n), left % n];
    const r = [Math.floor(right/n), right % n];
    
    const arr = [];
    
    for(let i = l[0]; i <= r[0]; i++) {
        if(i === l[0]) {
            for(let j = l[1]; j < ((l[0] === r[0]) ? r[1] + 1 : n); j++) {
                arr.push(getValue(i,j));
            }
        }
        else {
            for(let j = 0; j < ((i === r[0]) ? r[1] + 1 : n); j++) {
                arr.push(getValue(i,j));
            }
        }

    }
    
    return arr;
}
            
// j < i+1 의 값은 i+1, j >= i+1 의 값은 j+1의 값임
function getValue(i,j) {
    return j < i+1 ? i+1 : j+1;
}
            