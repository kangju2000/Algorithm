
function solution(n)
{
    let result = 0;
    while(true) {
        if(n === 0) return result;
        if(n % 2 === 0) {
            n /= 2;
        }
        else {
            n -= 1;
            result += 1;
        }
    }
}

