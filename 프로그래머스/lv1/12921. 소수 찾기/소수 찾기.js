function solution(n) {
    const arr = Array.from({length:n+1});
    let cnt = 0;
    for(let i = 2; i < n+1; i++) {
        for(let j = 2; i*j < n+1; j++) {
            if(arr[i*j] === undefined) {
                arr[i*j] = 1;
                cnt += 1;
            }
        }
    }
    
    return n-cnt-1;
}