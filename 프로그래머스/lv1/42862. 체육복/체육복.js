function solution(n, lostList, reserveList) {
    const dupList = [];
    lostList.forEach(lost => {
        if(reserveList.includes(lost)) dupList.push(lost);
    })
    dupList.forEach(dup => {
        lostList.splice(lostList.indexOf(dup), 1);
        reserveList.splice(reserveList.indexOf(dup), 1);
    })
    lostList.sort();
    reserveList.sort();
    let count = 0;
    lostList.forEach(lost => {
        const index = reserveList.findIndex(reserve => lost === reserve - 1 || lost === reserve + 1);
        if(index !== -1) {
            count += 1;
            reserveList.splice(index, 1);
        }
    })
    
    return n - lostList.length + count;
}