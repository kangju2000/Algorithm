/**
4 6 18

2 / 2 3 9
3 / 2 1 3


*/
function solution(arr) {
    let result = 1;
    let i = 2;
    while(i <= arr.sort((a,b)=>b-a)[0]) {
        let cnt = 0;
        
        const newArr = arr.reduce((acc,cur) => {
                if(cur % i === 0) {
                    cnt += 1;
                    acc.push(cur/i);
                }
                else acc.push(cur);
                return acc;
            }, []);
        
        if(cnt > 1) {
            arr = newArr;
            result *= i;
            i = 2;
        }
        else {
            i += 1;
        }
    }
    
    return result * arr.reduce((acc,cur)=>acc*cur, 1);
}