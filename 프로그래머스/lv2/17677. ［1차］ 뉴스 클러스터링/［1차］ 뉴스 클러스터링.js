/**
 자카드 유사도 J(A, B)는 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의된다.
 집합 A와 집합 B가 모두 공집합일 경우 1
 겹치는 개수 / (a길이+b길이-겹치는 개수)
*/
function solution(str1, str2) {
    const arr1 = str1.toLowerCase().split('').reduce((acc,cur,idx,arr) => {
        if(idx === arr.length-1) return acc;
        if(/[a-z]/.test(cur) && /[a-z]/.test(arr[idx+1])) {
            acc.push(cur+arr[idx+1]);
        }
        return acc;
    }, []);
    
    const arr2 = str2.toLowerCase().split('').reduce((acc,cur,idx,arr) => {
        if(idx === arr.length-1) return acc;
        if(/[a-z]/.test(cur) && /[a-z]/.test(arr[idx+1])) {
            acc.push(cur+arr[idx+1]);
        }
        return acc;
    }, []);
    
    if(!arr1.length && !arr2.length) return 65536;
    
    const arr1Copy = [...arr1];
    const arr2Copy = [...arr2];
    
    const intersectionArr = [];
    
    for(let i = 0; i < arr2Copy.length; i++) {
        if(arr1Copy.includes(arr2Copy[i])) {
            intersectionArr.push(arr2Copy[i]);
            arr1Copy.splice(arr1Copy.indexOf(arr2Copy[i]), 1);
        }
    }
    
    const unionCount = arr1.length + arr2.length - intersectionArr.length;
    
    return Math.floor(65536 * (intersectionArr.length / unionCount));
}