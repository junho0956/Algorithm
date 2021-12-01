# Weekly Challenge
> 문제가 업데이트되는 매주 문제 풀고 해설 업데이트하기
**2, 4, 6, 7** Line 기출되면서 문제 없어짐

### WEEK 1
- 프로그래머스 위클리 챌린지 1주차
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

### WEEK 3
- 프로그래머스 위클리 챌린지 3주차
- search, implementation
- *어디서 봤나 했더니 올해 네이버 신입공채때 풀었던 4번문제였다*
- 하.. 제출했더니 70점이 .. 다시 풀어봐야겠다.. (접근방식이 잘못되었다는 것까지는 확인!)
- 정답처리 받고 코드를!

### WEEK 10
- 프로그래머스 위클리 챌린지 10주차 - 교점에 별 만들기
- search, implementation
- 좌표가 -10만~10만까지 나옴에 유의
- object 형태의 Set을 사용하기 위해 c++ 사용
- y, x 의 min max 를 구해서 그 범위만큼 Set을 탐색하면서 `*`, `.` 을 넣어주면 된다.
```cpp
#include <iostream>
#include <algorithm>
#include <string>
#include <vector>
#include <set>
using namespace std;
#define INF 9876543210000
typedef long long ll;
typedef long double ld;
typedef pair<ll, ll> pll;
typedef pair<ld, ld> pld;

vector<string> solution(vector<vector<int>> line) {
    set<pll> star;
    ll maxX = -INF, minX = INF, minY = INF, maxY = -INF;
    for(int i = 0; i<line.size(); i++){
        for(int j = 0; j<line.size(); j++){
            if(i != j){
                ll a,b,e,c,d,f;
                a = line[i][0], b = line[i][1], e = line[i][2];
                c = line[j][0], d = line[j][1], f = line[j][2];
                if(a*d != c*b){
                    if((b*f-e*d)%(a*d-b*c) != 0) continue;
                    if((e*c-a*f)%(a*d-b*c) != 0) continue;
                    ll x = (b*f-e*d)/(a*d-b*c);
                    ll y = (e*c-a*f)/(a*d-b*c);
                    star.insert({x,y});
                        minX = min(minX, x);
                        maxX = max(maxX, x);
                        minY = min(minY, y);
                        maxY = max(maxY, y);
                }
            }
        }
    }
    
    int ans = 0;
    vector<string> answer;
    for(ll i = maxY; i>=minY; i--){
        string str = "";
        for(ll j = minX; j<=maxX; j++){
            if(star.find({j,i}) != star.end()) str += '*', ans++;
            else str += '.';
        }
        answer.push_back(str);
    }
    
    cout << ans;
    
    return answer;
}
```


### WEEK 11
- 프로그래머스 위클리 챌린지 11주차
- bfs, math
- LEVEL 3
- math: 좌표계산
    - > 보통 이런 문제는 사각형의 범위를 괴랄하게 주기 때문에 좌표압축같은 추가 계산이 필요함
    - 이 문제는 범위가 50이라서 그냥 사각형을 배열에 깔아놓고 탐색만해도 풀 수 있는 문제이다.
    - 그런데 사각형을 50*50 범위내에 그대로 테두리만 구분해서 둔다고 가정해보자. 그럼 다음과 같은 문제가 발생할 수 있다.
        - 테두리에 속하는 좌표 (a,b), (c,d) 가 있을 때 (a,b) 에서 (c,d) 로 거리1 차이난다고 가정해보자.
        - 그런데 (a,b), (c,d)가 서로 다른 사각형에 속하는 테두리 좌표여서 (a,b) <-> (c,d) 간의 이동이 불가능하다면?
        - 이걸 따로 처리해주지 않으면 탐색하면서 이동하게 되는 불상사가 발생해버린다.
        - 물론 [(a,b), (c,d)], [(c,d), (a,b)] 이런식으로 Set, Map을 활용할수도 있지만 좌표를 2배 크게 사용한다면 문제가 쉽게 해결된다.

```js
const arr = Array(51*2).fill().map(() => Array(51*2).fill(0));
const visit = Array(51*2).fill().map(() => Array(51*2).fill(false));
const my = [-1,1,0,0], mx = [0,0,1,-1];

function solution(rectangle, characterX, characterY, itemX, itemY) {
    rectangle.forEach(v => {
        const fy = v[1]*2, fx = v[0]*2, sy = v[3]*2, sx = v[2]*2;
        for(let i = fy; i<=sy; i++){
            for(let j = fx; j<=sx; j++){
                if(i == fy || i == sy || j == fx || j == sx){
                    if(!arr[i][j]) arr[i][j] = -1; // out
                    else if(arr[i][j] !== -1) arr[i][j] = 1; // in
                } else {
                    arr[i][j] = 1;
                }
            }
        }
    })

    const Q = [{y:characterY*2, x:characterX*2, cnt:0}];
    visit[characterY*2][characterX*2] = true;
    while(Q.length){
        const {y, x, cnt} = Q.shift();
        if(y === itemY*2 && x === itemX*2){
            return cnt/2;
        }

        for(let i = 0; i<4; i++){
            const yy = y+my[i], xx = x+mx[i];
            if(yy<1||xx<1||yy>50*2||xx>50*2||visit[yy][xx]||arr[yy][xx]!==-1) continue;
            Q.push({y:yy, x:xx, cnt:cnt+1});
            visit[yy][xx] = true;
        }
    }
}
```

### WEEK 12
- 프로그래머스 위클리 챌린지 12주차
- dfs
- LEVEL 2
- 던전의 갯수가 8개이기 때문에 단순 탐색으로 해결가능
```js
const visit = Array(9).fill(false);

function dfs(k, cnt, dun){
    
    if(k === 0) return cnt;
    
    let res = cnt;
    
    for(let i = 0; i<dun.length; i++){
        if(visit[i]) continue;
        if(dun[i][0] > k) continue;
        
        visit[i] = true;
        res = Math.max(res, dfs(k-dun[i][1], cnt+1, dun));
        visit[i] = false;
        
    }
    
    return res;
    
}

function solution(k, dungeons) {
    return dfs(k, 0, dungeons);
}
```