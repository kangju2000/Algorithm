function solution(clothes) {
    const clothMap = new Map();
    let result = 0;
    const arr = [];
    
    clothes.forEach(cloth => {
        const getClothesOfType = clothMap.get(cloth[1]);
        if(!getClothesOfType) {
            return clothMap.set(cloth[1], [cloth[0]]);
        }
        
        return clothMap.set(cloth[1], [...clothMap.get(cloth[1]), cloth[0]]);
    });
    
    for(let [key, value] of clothMap.entries()) {
        arr.push(value.length);
    }
    
    return arr.reduce((acc,cur)=>acc*(cur+1), 1)-1;
}

