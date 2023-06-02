function solution(X, Y) {
    const xMap = new Map();
    const yMap = new Map();
    let res = '';
    
    X.split('').forEach(x => {
        xMap.set(x, (xMap.get(x) ?? 0) + 1);
    });
    
    Y.split('').forEach(y => {
        yMap.set(y, (yMap.get(y) ?? 0) + 1);
    });
    
    for(let i = 0; i < 10; i++) {
        const xCnt = xMap.get(i+'');
        const yCnt = yMap.get(i+'');
        if(xCnt && yCnt) res += (i+'').repeat(Math.min(xCnt, yCnt));
    }
    
    if(!res.length) return '-1';
    const resArr = res.split('').sort((a,b) => b-a);
    if(resArr[0] === '0') return '0';
    return resArr.join('');
}