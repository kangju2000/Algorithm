/**
map에 저장
각 키당 최소 클릭할 수 있는 값을 value로 저장

*/
function solution(keymap, targets) {
    keyMap = new Map();
    
    keymap.forEach((key) => {
        key.split('').forEach((k, i) => {
            if(keyMap.get(k)) keyMap.set(k, Math.min(keyMap.get(k), i+1));
            else keyMap.set(k, i+1);
        })
    });
    
    return targets.reduce((acc,target) => {
        let count = 0;
        for(let i = 0; i < target.length; i++) {
            const val = keyMap.get(target[i]);
            if(!val) {
                acc.push(-1);
                return acc;
            }
            else count += val;
        }
        acc.push(count);
        
        return acc;
    }, []);
}