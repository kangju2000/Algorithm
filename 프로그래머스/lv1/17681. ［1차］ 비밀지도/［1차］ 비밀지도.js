function solution(n, arr1, arr2) {
    const answer = Array.from({length:n}, () => '');
    for(let i = 0; i < n; i++) {
        for(let j = n-1; j >= 0; j--) {
            const p = Math.pow(2, j);
            if(p <= arr1[i] || p <= arr2[i]) {
                if(p <= arr1[i]) arr1[i] -= p;
                if(p <= arr2[i]) arr2[i] -= p;
                answer[i] += '#';
            }
            else {
                answer[i] += ' ';
            }
        }    
    }
    
    return answer;
}