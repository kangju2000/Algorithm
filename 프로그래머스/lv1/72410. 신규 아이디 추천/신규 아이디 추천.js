/**
3~15 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자
마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없음

1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
*/
function solution(new_id) {
    //1
    const new_id1 = new_id.toLowerCase();
    
    //2
    const new_id2 = new_id1.split('').filter(el => {
        if(el >= 'a' && el <= 'z') return true;
        if(!isNaN(el)) return true;
        if(el === '-' || el === '_' || el === '.') return true;
        return false;
    }).join('');
    
    
    //3
    const new_id3 = new_id2.split('').filter((el,i) => {
        if(new_id2[i-1] === '.' && new_id2[i] === '.') return false;
        return true;
    }).join('');
    
    //4
    let temp = new_id3;
    if(new_id3[0] === '.') temp = temp.slice(1);
    if(new_id3[new_id3.length-1] === '.') temp = temp.slice(0,temp.length-1);
    
    const new_id4 = temp;
    
    //5
    const new_id5 = new_id4.length === 0 ? 'a' : new_id4;
    
    //6
    const new_id6_1 = new_id5.length >= 16 ? new_id5.slice(0,15) : new_id5;
    const new_id6 = new_id6_1.at(-1) === '.' ? new_id6_1.slice(0,new_id6_1.length-1) : new_id6_1;
    
    //7
    const new_id7 = new_id6.length <= 2 ? new_id6.padEnd(3, new_id6.at(-1)) : new_id6;
    console.log(new_id1,new_id2,new_id3,new_id4,new_id5,new_id6,new_id7)
    return new_id7;
}