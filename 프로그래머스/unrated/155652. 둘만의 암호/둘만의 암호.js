/**

s의 각 문자를 아스키코드로 바꾸고, index를 더함
아스키코드 ~ 아스키코드+index

반복 돌다가 skip의 아스키코드와 겹치면 패스
아스키코드 + index = z의 아스키코드 + 1이면 다시 a로 돌아감

*/
function solution(s, skip, index) {
    const skipSet = new Set();
    skip.split('').forEach(val => skipSet.add(val.charCodeAt(0)));
    
    return s.split('').reduce((acc,cur) => {
        let curCode = cur.charCodeAt(0);
        let cnt = 0;
        while(cnt < index) {
            curCode = curCode+1 > 'z'.charCodeAt(0) ? 'a'.charCodeAt(0) : curCode+1;
            if(!skipSet.has(curCode)) {
                cnt++;
            }            
        }
        
        acc += String.fromCharCode(curCode);
        return acc;
    }, '');
}