function solution(progresses, speeds) {
    const answer = [];
    let count = 0;
    let currentIndex = 0;
    let length = progresses.length;
    while(true) {
        progresses = progresses.map((progress, index) => {
            if(progress >= 100) return progress;
            return progress + speeds[index];
        });
                                    
                                    
        while(progresses[currentIndex] >= 100) {
            count++;
            currentIndex++;
            if(currentIndex === length) break;
        }
        if(count !== 0) {
            answer.push(count);
            count = 0;
        }
        if(currentIndex === length) break;
    }
    
    return answer;
}