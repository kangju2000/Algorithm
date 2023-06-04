function solution(s) {
    return Array.from({length:s.length}).reduce((acc,cur,idx) => {
        const newS = s.slice(idx) + s.slice(0,idx);
        return isCorrectStr(newS) ? acc += 1 : acc;
    } ,0);
}

function isCorrectStr(str) {
    const stack = [];
    const brackets = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    };
    
    for(let i = 0; i < str.length; i++) {
        if(Object.values(brackets).includes(str[i])) stack.push(str[i]);
        else if(stack.at(-1) === brackets[str[i]]) stack.pop();
        else return false;
    }
    
    return stack.length === 0;
}