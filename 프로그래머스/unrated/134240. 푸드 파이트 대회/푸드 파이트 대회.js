function solution(food) {
    const f = food.reduce((acc,cur,idx) => {
        if(idx===0) return acc;
        return acc += (idx+'').repeat(Math.floor(cur/2));
    }, '');
    
    return f + '0' + [...f].reverse().join('');
}