function solution(s) {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if(stack[stack.length-1] === stack[stack.length-2]) {
            stack.pop();
            stack.pop();
        }
    }
    return stack[0] ? 0 : 1;
}