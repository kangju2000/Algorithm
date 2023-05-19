/**
탈락하는 경우
1. 중복 단어일 때
2. 마지막 문자로 시작하는 단어가 아닐 때
*/
function solution(n, words) {
    let index = 0;
    const stack = [];
    while(true) {
        const [word] = words.splice(0, 1);
        if(stack.some(s => s === word)) {
            console.log('1')
            return [index%n + 1, Math.floor(index/n) + 1];
        }
        if(words.length === 0) {
            return [0,0];
        }
        if(word.at(-1) !== words[0].at(0)) {
            return [(index+1)%n + 1, Math.floor((index+1)/n) + 1];
        }
        
        stack.push(word);
        index++;
    }
}