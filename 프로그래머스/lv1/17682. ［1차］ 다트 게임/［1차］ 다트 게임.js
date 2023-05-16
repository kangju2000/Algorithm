function solution(dartResult) {
    const bonusNOption = dartResult.split(/[0-9]+/g).slice(1);
    const scoreArray = dartResult.match(/[0-9]+/g);
    
    const arr = [];
    
    bonusNOption.map((item,idx) => {
        if(idx !== 0 && item[1] === '*') {
            arr[idx-1] += '*';
        }
        arr.push(item)
    });
    
    return arr.reduce((acc,cur,idx) => {
        cur.split('').forEach(c => {
            if(c === 'S') score = Math.pow(scoreArray[idx], 1);
            if(c === 'D') score = Math.pow(scoreArray[idx], 2);
            if(c === 'T') score = Math.pow(scoreArray[idx], 3);
            if(c === '*') score *= 2;
            if(c === '#') score *= -1;
        });
        
        return acc + score;
    }, 0);
}