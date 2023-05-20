function solution(nums) {
    const sums = [];
    for(let i = 0; i < nums.length-2; i++) {
        for(let j = i+1; j < nums.length-1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                sums.push(nums[i]+nums[j]+nums[k]);
            }
        }
    }
    sums.sort((a,b) => b-a);
    const arr = '0'.repeat(sums[0]+1).split('');
    for(let i = 2; i < sums[0]+1; i++) {
        if(arr[i] !== undefined) {
            for(let j = 2; i*j < sums[0]+1; j++) {
                arr[i*j] = '1';
            }
        }
    }
    
    return sums.reduce((acc, cur) => {
        if(arr[cur] === '0') acc+=1;
        
        return acc;
    } , 0);
}