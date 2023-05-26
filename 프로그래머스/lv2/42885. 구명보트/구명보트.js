/**
한 번에 최대 2명, 무게 제한 O
구명보트 최대한 적게 사용하는 법
먼저 people을 오름차순으로 정렬하고, 제일 낮은 몸무게와 최대한 같이 탈 수 있는 몸무게를 찾아서 보내기
*/
function solution(people, limit) {
    let result = 0;
    let leftPointer = 0;
    let rightPointer = people.length - 1;
    people.sort((a,b) => a-b);
    
    while(leftPointer <= rightPointer) {
        if(leftPointer === rightPointer) {
            result += 1;
            break;
        }
        if(people[leftPointer] + people[rightPointer] <= limit) {
            leftPointer += 1;
        }
        
        rightPointer -= 1;
        result += 1;
    }
    
    return result;
}