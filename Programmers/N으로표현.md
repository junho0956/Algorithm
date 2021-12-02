[프로그래머스-K번째수](https://programmers.co.kr/learn/courses/30/lessons/42895?language=cpp)
*프로그래머스 K번째 수 with javascript*

- 문제 접근
    - DFS
    - 최대 8번이하로 주어진 수 N 만을 이용해서 number를 만들 수 있는지 체크
    - 주의해야할 부분이 있다면 현재 `cur`이 0인 경우 `*, /` 연산이 들어갔을 때 불필요한 계산 발생
    - 나머지는 그대로 dfs 구현해주면 문제없이 통과

```cpp
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

typedef long long ll;

int answer = 9;
int n, goal;

void dfs(ll cur, int cnt){
    if(cnt >= answer) return;
    if(cur == goal){
        answer = min(answer, cnt);
        return;
    }
    
    for(int i = 1; i<=6; i++) {
        
        ll temp = 0;
        for(int j = 0; j<i; j++) temp = temp*10 + n;
        
        dfs(cur + temp, cnt+i);
        dfs(cur - temp, cnt+i);
        
        if(cur != 0){
            dfs(cur*temp, cnt+i);
            dfs(cur/temp, cnt+i);
        }
        
    }
}

int solution(int N, int number) {
    n = N, goal = number;
    dfs(0, 0);
    return answer > 8 ? -1 : answer;
}
```