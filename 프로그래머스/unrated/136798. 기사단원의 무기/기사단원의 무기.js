/**
1~number까지의 약수 개수를 배열로 만들기

약수 개수 구하는법?

소인수분해해서 각 지수+1 한 값을 곱하면 개수

*/
function solution(number, limit, power) {
    // const arr = Array(number).fill(0).map((_,i) => soinsu(i+1));
    // console.log(arr)
    const arr = [1];
    for(let i = 2; i <= number; i++) {
        let cnt = 0;
        for(let j = 1; j < Math.floor(Math.sqrt(i)) + 1; j++) {
            if(j === Math.sqrt(i)) cnt += 1;
            else if(i % j === 0) cnt += 2;
        }
        arr.push(cnt);
    }
    
    return arr.reduce((acc, cur) => {
        if(cur > limit) return acc + power;
        return acc+ cur;
    }, 0);
}

// function soinsu(num) {
//     if(num === 1) return 1;
    
//     const m = new Map();
//     let i = 2;
//     while(true) {
//         if(i > Math.sqrt(num)) {
//             m.set(num, 1);
//             break;
//         }
            
//         if(num % i === 0) {
//             num /= i;
//             m.set(i, (m.get(i) ?? 0) + 1);
//             i = 2;
//         }
//         else {
//             i += 1;
//         }
//     }

//     return [...m.values()].reduce((acc,cur) => acc * (cur+1), 1);
// }

// function isSosu(num) {
//     if (num === 0 || num === 1) return false;
//     for(let i = 2; i <= Math.sqrt(num); i++) {
//         if(num % i === 0) return false;
//     }
    
//     return true;
// }