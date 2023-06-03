/**
aya ye woo ma
*/
function solution(babbling) {
    return babbling.reduce((acc,cur) => {
        let i = 0;
        let prevBabbling = '';
        while(i < cur.length) {
            const word2 = cur.slice(i,i+2);
            const word3 = cur.slice(i,i+3);
            if(word2 === prevBabbling || word3 === prevBabbling) return acc;
            
            if(word3 === 'aya' || word3 === 'woo') {
                i += 3;
                prevBabbling = word3;
            }
            else if(word2 === 'ye' || word2 === 'ma') {
                i += 2;
                prevBabbling = word2;
            }
            else {
                return acc;
            }
        }
        
        return acc+=1;
    }, 0);
}