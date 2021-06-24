[프로그래머스-K번째수](https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript)
*프로그래머스 K번째 수 with javascript*

- 문제 접근
    - 문제에서 요구하는대로 slice를 통해 범위를 자르고 정렬해주면 되는 문제

```javascript
function solution(array, commands) {
    let answer = [];
    
    commands.forEach(command => {
        let arr = array.slice(command[0]-1, command[1]);
        arr.sort((a,b) => a-b);
        answer.push(arr[command[2]-1])
    })
    
    return answer;
}
```