function solution(k, m, score) {
    score.sort().reverse();
    
    const arr = score.filter((s,i)=>i%m === m-1);
    

    return arr.reduce((acc,cur)=>acc+cur,0) * m
}