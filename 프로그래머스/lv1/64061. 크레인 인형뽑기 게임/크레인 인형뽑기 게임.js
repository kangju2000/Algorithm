/**
stack, NxN은 배열의 length로 확인
moves에서의 1은 배열 index 0

board 반복 돌려서 0이 아니면 스택에 추가, 이때 top과 비교해서 같으면 제거하고 res+=1
moves 다돌면 끝
[0,0,0,0,0],
[0,0,1,0,3],
[0,2,5,0,1],
[4,2,4,4,2],
[3,5,1,3,1]]

[1,5,3,5,1,2,1,4]
*/
function solution(board, moves) {
    const stack = [];
    const N = board.length;
    
    return moves.map(m=>m-1).reduce((acc,move) => {
        for(let i = 0; i < N; i++) {
            const doll = board[i][move];
            
            if(doll !== 0) {
                board[i][move] = 0;
                if(stack.at(-1) === doll) {
                    stack.pop();
                    return acc+=2;
                }
                stack.push(doll);
                return acc;
            }
        }
        return acc;
    }, 0);
}