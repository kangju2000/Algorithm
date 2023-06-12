/**
나온 영어 소문자를 Map에 저장하고, 나올 때마다 카운트를 증가시킨다.
증가시킨 후 다른 value와 같은 것이 있다면 loop를 중지하고 slice하여 다시 loop를 시작한다.
*/

function solution(s) {
    const [res, obj, x] = s.split('').reduce((acc,cur) => {
        if(Object.values(acc[1]).length === 0) acc[2] = cur;
        acc[1][cur] = acc[1][cur] + 1 || 1;
        
        let cnt = 0;
        for(const [key, value] of Object.entries(acc[1])) {
            if(key === acc[2]) continue;
            cnt += value;
        }
        
        if(acc[1][acc[2]] === cnt) {
            acc[0] += 1;
            acc[1] = {};
            return acc;
        }
        
        return acc;
    }, [0, {}, s[0]])
    
    return (Object.values(obj).length === 0) ? res : res+1;
}

// function solution(s) {
//     let result = 0;
//     const strMap = new Map();
//     let i = 0;
    
//     while(true) {
//         const curValue = (strMap.get(s[i]) ?? 0) + 1;
//         const hasValue = [...strMap.values()].some(value => value === curValue);
        
//         if(hasValue) {
//             strMap.clear();
//             s = s.slice(i+1);
//             i = 0;
//             result++;
//         }
//         else {
//             strMap.set(s[i], curValue);
//             i++;
//         }
        
        
//         if(s.length === 0) break;
//         if(s.length === i) {
//             result++;
//             break;
//         }
//     }
    
//     return result;
// }