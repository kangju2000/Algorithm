function solution(s) {
    const str = s.slice(1,s.length-1);
    const arr = [];
    
    let temp;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '{') {
            temp = i+1;
        }
        else if(str[i] === '}') {
            arr.push(str.slice(temp,i).split(','));
        }
    }
    
    arr.sort((a,b) => a.length-b.length);
    
    return arr.reduce((acc,cur) => {
        cur.forEach(el => {
          if(!acc.includes(Number(el))) acc.push(Number(el));
        })
        
        return acc;
    }, []);
}