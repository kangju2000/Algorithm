function solution(number) {
    let result = 0;
    for(let i = 0; i < number.length - 2; i++) {
        for(let j = i + 1; j < number.length - 1; j++) {
            const addTwo = number[i] + number[j];
            result += number
                        .slice(j+1)
                        .reduce((acc, cur) =>(cur + addTwo === 0) ? acc + 1: acc, 0);
        }
    }
    
    return result;
}