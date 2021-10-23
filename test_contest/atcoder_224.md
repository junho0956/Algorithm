### Atcoder_Beginner_224
- 영어해석이 너무 어렵다 .... ㅠㅠㅠㅠㅠㅠㅠ
- solve: A,B,C,D

#### A Tires
문제주어지는게 딱 2개의 테케밖에 없기 때문에 문자열 끝이 `r` 인지 `t` 인지로 판별했다

#### B Mongeness
해당 조건을 만족하면 `Yes` 가 된다.<br>
임의의 좌표 `(a,b), (c,d)` 가 있을 때 `A[a][b]+A[c][d] <= A[c][a]+A[b][d]` 가 전부 만족하는지 모든 원소별로 확인해주면 된다

#### C Triangle?
처음부터 CCW 를 사용했으면 쉽게 해결하는건데; 세점 가지고 기울기 구하다가 시간 다날렸다..<br>
dfs를 통해서 세점을 뽑고 CCW를 돌려서 만족하는 모든 삼각형을 찾으면 된다.

#### D 8 Puzzle on Graph
아 이거도 dfs로 계속 바꿔보다가 시간 날렸다;.. 하하하<br>
결국 해당값들을 스트링으로 치환하면(빈 정점을 9로 표현했을 때)
- `"135624987"`
- `"319284756"`
- ..
이런식으로 표현할 수 있다.<br>
이걸 봤을 때 바로 bfs를 떠올릴 수 있어야한다.
최단 경로만 찾으면 되기 때문에, bfs를 이용해서 스트링을 `123456789`로 만들 때까지 탐색 돌리면 된다.