function solution(n) {
    const fibo = [0n,1n];
    for(let i = 2; i <= n; i++) {
        fibo[i] = BigInt(fibo[i-2]) + BigInt(fibo[i-1]);
    }
    return fibo[n] % 1234567n;
}