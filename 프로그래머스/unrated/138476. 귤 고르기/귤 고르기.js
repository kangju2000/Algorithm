/**
k개 골라 상자 하나에 담음
서로 다른 종류의 수 최소화

개수 배열 만들어서 sort
*/
function solution(k, tangerine) {
    const arr = [-1];
    tangerine.forEach(t => {
        if(!arr[t]) arr[t] = 1;
        else arr[t] += 1;
    })
    
    arr.sort((a,b) => b-a);
    
    let cnt = 0;
    for(let i = 0; i < tangerine.length ; i++) {
        if(cnt + arr[i] >= k) return i+1;
        cnt += arr[i];
    }
}