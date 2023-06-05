/**
1. 오름차순 

[0,0,1,3,4,4,6,6,6,6,10]
4에서 멈추게되는데, 답은 4이상 6미만이다.
뒤의 개수를 확인해서 이게 4보다 크면 답으로 내자

*/
function solution(citations) {
    let h = 0;
    
    let len = citations.length;
    citations.sort((a,b)=>a-b);
    
    for(let i = 0; i < len; i++) {
        let citation = citations[i];
        
        if(citation <= len - i) h = citation;
        else if(h <= len - i) {
            return len - i;
        }
        else return h;
    }
    
    return h;
}