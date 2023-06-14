/**

초기 세팅
키패드 배열과 현재 왼,오른 손가락 위치

위치를 키(0,1,*)로 설정해서 map에서 해당 키의 인덱스를 알려주게하기

거리는 어떻게?
ex) 8 -> 1
(2,1) -> (0,0)

(a,b) (c,d) 라고 하면 거리는 Math.abs(a-c) + Math.abs(b-d) 가 된다.



*/
function solution(numbers, hand) {
    const keypad = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['*','0','#']
    ];
    
    const keyMap = new Map();
    const thumb = {
        left: '*',
        right: '#',
    };
    
    keypad.forEach((keyArr, xIndex) => {
        keyArr.forEach((key, yIndex) => {
            keyMap.set(key, [xIndex,yIndex]);
        });
    });
    
    return numbers.reduce((acc, number) => {    
        if(number === 1 || number === 4 || number === 7) {
            acc += 'L';
            thumb.left = number + '';
            return acc;
        }
        if(number === 3 || number === 6 || number === 9) {
            acc += 'R';
            thumb.right = number + '';
            return acc;
        }
        
        const dist = keyMap.get(number+'');
        const leftDist = keyMap.get(thumb.left);
        const rightDist = keyMap.get(thumb.right);
        
        const leftDiff = diff(leftDist, dist);
        const rightDiff = diff(rightDist, dist);
        
        if(leftDiff > rightDiff) {
            acc += 'R';
            thumb.right = number + '';
        }
        else if(leftDiff < rightDiff) {
            acc += 'L';
            thumb.left = number + '';
        }
        else {
            if(hand === 'right') {
                acc += 'R';
                thumb.right = number + '';
            }
            else {
                acc += 'L';
                thumb.left = number + '';
            }
        }
        
        return acc;
    }, '');
}
                   
function diff(cur, next) {
    return Math.abs(next[0] - cur[0]) + Math.abs(next[1] - cur[1]);
}
