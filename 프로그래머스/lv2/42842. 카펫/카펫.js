/**
yellow가 한 줄일 때, 두 줄일 때~~yellow의 sqrt까지
1x24 -> 24+24+1+1+4= 54
2x12 -> 12+12+2+2+4 = 30
3x8 -> 8+8+3+3+4 = 26
4x6 -> 6+6+4+4+4 = 24

(a,b) 라고 했을 때, 답은 [b+2, a+2] 다!
*/
function solution(brown, yellow) {
    for(let i = 1; i < Math.sqrt(yellow)+1; i++) {
        if(yellow % i === 0) {
            if((i+yellow/i)*2+4 === brown) {
                return [yellow/i+2, i+2];
            }
        }
    }
}