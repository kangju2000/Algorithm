/**

*/
function solution(n,a,b)
{
    let answer = 1;
    if(a>b) {
        let temp = a;
        a = b;
        b = temp;
    }
    while(true) {
        if(b-a === 1 && a%2!==0 && b%2===0) break;
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer += 1;
    }
    return answer;
}