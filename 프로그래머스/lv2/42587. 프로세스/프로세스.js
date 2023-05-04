function solution(priorities, location) {
    const queue = new Map();
    let count = 0;
    priorities.forEach((item, key) => queue.set(key, item));
    
    while(true) {
        const maxKey = [...queue.keys()].reduce((a, b) => queue.get(a) >= queue.get(b) ? a : b);
        
        for(const [key, value] of queue.entries()) {
            if(key === maxKey) {
                queue.delete(key);
                count += 1;
                
                if(key === location) return count;
                break;
            }
            queue.delete(key);
            queue.set(key, value);
        }
    }   
}
