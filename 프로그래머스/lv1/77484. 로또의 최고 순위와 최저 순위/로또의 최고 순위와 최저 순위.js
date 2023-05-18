/**
1. 0의 개수 확인
2. 0이 아닌 로또 번호가 일치한 것들을 확인하여 일치 개수 세기
3. 최저 순위는 일치 개수, 최고 순위는 일치 개수 + 0 개수
*/
function solution(lottos, win_nums) {
    const winCountToRank = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6
    };
    
    let zero = 0;
    let winCount = 0;
    
    lottos.forEach((lotto) => {
        if(lotto === 0) return zero += 1;
        if(win_nums.some((win_num) => win_num === lotto)) winCount += 1;
    });
    
    return [winCountToRank[winCount + zero], winCountToRank[winCount]]
}