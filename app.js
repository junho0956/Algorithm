function solution(line) {
    const star = new Map();
    const INF = 98765432100000;
    let maxX = -INF, minX = INF, maxY = -INF, minY = INF;
    line.forEach((f, idx) => {
        line.forEach((s, idx2) => {
            if(idx !== idx2){
                let A,B,C,D,E,F;
                A = f[0], B = f[1], E = f[2], C = s[0], D = s[1], F = s[2];
                
                if(A*D !== B*C){
                    const x = (B*F-E*D)/(A*D-B*C);
                    const y = (E*C-A*F)/(A*D-B*C);
                    if(Number.isInteger(x) && Number.isInteger(y)){
                        star.set({x,y});
                        maxX = Math.max(x, maxX);
                        minX = Math.min(x, minX);
                        maxY = Math.max(y, maxY);
                        minY = Math.min(y, minY);
                    }
                }
            }
        })
    })
    console.log(star);
    const answer = [];
    for(let i = minX; i<=maxX; i++){
        let str = "";
        for(let j = minY; j<=maxY; j++){
            if(star.has({x:i,y:j})) str += '*';
            else str += '.';
        }
        answer.push(str);
    }
    console.log(answer);
    return answer;
}

solution([[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]);