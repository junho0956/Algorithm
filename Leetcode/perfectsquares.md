[Leetcode - Perfect Squares](https://leetcode.com/problems/perfect-squares/)
*Leetcode Perfect Squares with javascript*

- 문제접근
    - 문제의 square number는 제곱수를 뜻한다
    - 임의의 수 n 을 만들 수 있는 제곱수의 합을 최소로 하는 것이 문제가 요구하는 것
    - 점화식을 이용할 수도 있고, 재귀를 통해서 해결할 수도 있다.
    - 점화식은 제곱수마다 이전의 제곱수를 만들 수 있는 값에 + 1 을 취해주는 방식

- 점화식
```javascript
/**
 * @param {number} n
 * @return {number}
 */

let numSquares = function(n) {
    
    let dp = Array(10001).fill(0);
    
    for(let i = 1; i<=n; i++){
        dp[i] = i;
        for(let j = 1; j*j<=i; j++){
            dp[i] = Math.min(dp[i], dp[i-j*j]+1);
        }
    }
    
    return dp[n]
};
```

- 재귀
```javascript
/**
 * @param {number} n
 * @return {number}
 */

let answer;

function dfs(n, sub, cnt){
    
    if(n === 0) {
        answer = Math.min(answer, cnt);
        return;
    }
    
    if(n < 0 || cnt >= answer || sub <= 0) return;
    
    dfs(n - Math.pow(sub, 2), sub, cnt+1);
    dfs(n, sub-1, cnt);
}

let numSquares = function(n) {
    answer = n;
    dfs(n, Math.floor(Math.sqrt(n)), 0);
    return answer;
};
```