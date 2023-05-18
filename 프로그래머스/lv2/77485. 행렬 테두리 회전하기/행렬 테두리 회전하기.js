/**
(x1,y1), (x2,y2)
예를 들어 (2,2) (5,4) 라고 하면
2,2 2,3 2,4
3,2     3,4
4,2     4,4
5,2 5,3 5,4

x1은 y1~y2 까지
x2도 y1~y2 까지
나머지는 (x1+a, y1), (x2+a,y2)

현재 이동하는 방향을 체크해서, 움직일 수 있으면 그 자리에 있던 값을 따로 저장 후 자리로 이동한다.
처음 세팅을 초기 위치에서 오른쪽으로 이동한다.
우, 하, 좌, 상을 돌고 초기 위치가 되면 멈춘다.

오른쪽 - y 증가 / 아래쪽 - x 증가 / 왼쪽 - y 감소 / 위쪽 - x 감소

이동 시킨 값들을 배열에 저장해두고, 이동이 끝나면 최소값을 받아와 result 배열에 추가한다.

모든 쿼리가 끝나면 result를 반환한다.
*/
function solution(rows, columns, queries) {
    //행렬 세팅
    const arr = [];
    let num = 1;
    for(let row = 0; row <= rows; row++) {
        arr.push([]);
        for(let col = 0; col <= columns; col++) {
            if(row === 0 || col === 0) {
                arr[row][col] = 0;
                continue;
            }
            arr[row][col] = num++;
        }
    }
    
    const result = [];
    
    queries.forEach(query => {
        const [x1, y1, x2, y2] = query;
        let directionArr = [[0,1],[1,0],[0,-1],[-1,0]]; // 우 하 좌 상
        let dIndex = 0;
        const rotateArr = [];
        
        let [x, y] = [x1, y1];
        let temp = arr[x][y];
        let min = arr[x][y];
        while(true) {
            const [dx, dy] = directionArr[dIndex];
            const [newX, newY] = [x+dx, y+dy];
            
            
            // 범위 벗어났을 때 방향 바꾸기
            if(newX < x1 || newX > x2 || newY < y1 || newY > y2) {
                if(dIndex === 3) break;
                dIndex += 1;
                continue;
            }
            
            let cur = temp;
            let nxt = arr[newX][newY];
            arr[newX][newY] = cur;
            temp = nxt;
        
            if(min > temp) min = temp;
            x = newX;
            y = newY;
        }
        
        result.push(min);
    })
    
    return result;
}
