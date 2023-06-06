/**
7 9 1 1 4
7+9 9+1 1+1 1+4 4+7
7+9+1 9+1+1 1+1+4 1+4+7 4+7+9
7+9+1+1 9+1+1+4 1+1+4+7 1+4+7+9 4+7+9+1
1+1+4+7+9

*/
function solution(elements) {
    const resSet = new Set();
    for(let i = 0; i < elements.length; i++) {
        const newElements = [...elements.slice(i), ...elements.slice(0, i)];
        newElements.reduce((acc,cur,idx) => {
            acc += cur;
            resSet.add(acc);
            
            return acc;
        }, 0);
    }
    
    return resSet.size;
}