function solution(k, score) {
    const queue = [];
    
    return score.reduce((acc, cur) => {
        queue.push(cur);
        queue.sort((a,b) => a - b);
        if(queue.length > k) queue.shift();
        acc.push(queue[0]);
        
        return acc;
    }, []);
}