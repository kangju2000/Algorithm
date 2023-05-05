function solution(k, d) {
    const radius = Math.sqrt((d/k)*(d/k));
    let cnt = 0;
    for(let i = 1; i <= radius; i++) {
        cnt += Math.floor(Math.sqrt(radius*radius - i*i));
    }
    return 1 + cnt + Math.floor(radius)*2;
}