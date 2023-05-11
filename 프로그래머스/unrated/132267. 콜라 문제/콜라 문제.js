function solution(a, b, n) {
    let result = 0;
    while(true) {
        const r = Math.floor(n/a);
        if(r === 0) break;
        n += r*(b-a)
        result += r*b;
    }
    
    return result;
}

// 5 3 21

/**
20개 가져가서 12개 교환 -> 1+12 = 13
10개 가져가서 6개 교환 -> 3+6 = 9
5개 가져가서 3개 교환 -> 4+3 = 7
5개 가져가서 3개 교환 -> 2+3 = 5
5개 가져가서 3개 교환 -> 0+3 = 3
=> 27

*/
