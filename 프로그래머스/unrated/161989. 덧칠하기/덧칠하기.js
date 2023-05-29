function solution(n, m, section) {
    if(m === 1) return section.length;
    let result = 0;
    
    while(true) {
        let idx = 0;
        for(let i = 1; i < section.length; i++) {
            if(section[0] + m - 1 < section[i]) {
                idx = i;
                break;
            }
        }
        
        result += 1;
        if(idx === 0) return result;
        else section = section.slice(idx);
    }
}