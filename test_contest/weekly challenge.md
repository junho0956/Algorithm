# Weekly Challenge
> 문제가 업데이트되는 매주 문제 풀고 해설 업데이트하기
**2, 4, 6, 7** Line 기출되면서 문제 없어짐

### WEEK1
- math
- LEVEL 1
- 문제에서 요구하는대로 횟수당 `price`를 계산해주고 `money`와 비교해주면 해결
```js
function solution(price, money, count) {
    let total = 0;
    for(let i = 1; i<=count; i++) total += price*i;
    
    if(money >= total) return 0;
    return total - money;   
}
```

### WEEK3
- search, greedy
- *어디서 봤나 했더니 올해 네이버 신입공채때 풀었던 4번문제였다*
- 하.. 제출했더니 70점이 .. 다시 풀어봐야겠다.. (접근방식이 잘못되었다는 것까지는 확인!)

```js
const my = [-1,1,0,0], mx = [0,0,1,-1];
let N, board = [], answer = 0, puzzle, puzzleUsed; // puzzle은 Numbering에서 초기화

function makeNewTable(){
    return Array(N).fill().map(() => Array(N));
}

function turn(arr){
    let idx = 0;
    const newTable = makeNewTable();
    for(let i = 0; i<N; i++) for(let j = 0; j<N; j++) newTable[i][j] = arr[idx++];
    return newTable;
}

function turnTable(table){
    const resultTable = [];
    
    let arr = [], arr2 = [], arr3 = [];
    for(let i = N-1; i>=0; i--) for(let j = 0; j<N; j++) arr.push(table[j][i]);
    for(let i = N-1; i>=0; i--) for(let j = N-1; j>=0; j--) arr2.push(table[i][j]);
    for(let i = 0; i<N; i++) for(let j = N-1; j>=0; j--) arr3.push(table[j][i]);
    
    resultTable.push(turn(arr));
    resultTable.push(turn(arr2));
    resultTable.push(turn(arr3));
    
    return resultTable;
}

function getPuzzle(tables){
    for(let k = 0; k<tables.length; k++){
        for(let i = 0; i<N; i++){
            for(let j = 0; j<N; j++){
                if(tables[k][i][j]){
                    const arr = [{y:i, x:j}];
                    const puzzleColor = tables[k][i][j];
                    const trace = [{y:0,x:0}];
                    tables[k][i][j] = 0;
                    while(arr.length){
                        const {y, x} = arr.shift();
                        
                        for(let i = 0; i<4; i++){
                            const yy = y+my[i];
                            const xx = x+mx[i];
                            if(yy<0||xx<0||yy>=N||xx>=N||tables[k][yy][xx]!=puzzleColor) continue;
                            tables[k][yy][xx] = 0;
                            trace.push({y:my[i], x:mx[i]});
                            arr.push({y:yy, x:xx});
                        }
                    }
                    puzzle[puzzleColor].push(trace);
                }
            }
        }
    }
}

function Numbering(table){
    let num = 1;
    for(let i = 0; i<N; i++){
        for(let j = 0; j<N; j++){
            if(table[i][j] == 1){
                num++;
                const arr = [{y:i, x:j}];
                while(arr.length){
                    let {y, x} = arr.shift();
                    table[y][x] = num;
                    for(let i = 0; i<4; i++){
                        let yy = y+my[i];
                        let xx = x+mx[i];
                        if(yy<0||xx<0||yy>=N||xx>=N||table[yy][xx]!==1) continue;
                        arr.push({y:yy, x:xx});
                    }
                }
            }
        }
    }
    
    // puzzle 초기화
    puzzle = Array(num+3).fill().map(() => Array());
    puzzleUsed = Array(num+3).fill(false);
    
    return table;
}

function solution(game_board, table) {
    N = game_board.length;
    
    // game_board 에서 퍼즐꺼내기
    for(let i = 0; i<N; i++){
        for(let j = 0; j<N; j++){
            if(game_board[i][j] == 0){
                
                const queue = [{y:i,x:j}];
                game_board[i][j] = 1;
                const trace = [{y:0,x:0}];
                
                while(queue.length){
                    const {y, x} = queue.shift();
                    
                    for(let i = 0; i<4; i++){
                        const yy = y+my[i];
                        const xx = x+mx[i];
                        if(yy<0||xx<0||yy>=N||xx>=N||game_board[yy][xx]) continue;
                        game_board[yy][xx] = 1;
                        queue.push({y:yy, x:xx});
                        trace.push({y:my[i], x:mx[i]});
                    }
                }
                board.push({trace, used: false});
            }
        }
    }
    // 퍼즐 중복을 막기 위해 번호 매겨주기
    table = Numbering(table);
    
    // table 회전시킨 후, 회전시킨 테이블에서 퍼즐꺼내기
    // puzzle[puzzleColor]
    getPuzzle([table, ...turnTable(table)]);
    
    // 결국 크기에 맞는게 몆개가 있는지 파악하는 것
    for(let i = 0; i<board.length; i++){
        let finds = false;
        for(let j = 0; j<puzzle.length; j++){
            if(puzzle[j].length === 0) continue;
            if(puzzleUsed[j]) continue;
            if(board[i].trace.length !== puzzle[j][0].length) continue;
            for(let k = 0; k<4; k++){
                let ck = true;
                for(let l = 0; l<puzzle[j][k].length; l++){
                    let by = board[i].trace[l].y;
                    let bx = board[i].trace[l].x;
                    let py = puzzle[j][k][l].y;
                    let px = puzzle[j][k][l].x;
                    if(by !== py || bx !== px){
                        ck = false;
                        break;
                    }
                }
                if(ck){
                    answer += puzzle[j][k].length;
                    puzzleUsed[j] = true;
                    finds = true;
                    break;
                }
            }
            if(finds) break;
        }
    }
    
    return answer;
}
```