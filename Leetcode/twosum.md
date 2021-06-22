[LeetCode - Two sum](https://leetcode.com/problems/two-sum/submissions/)

- 문제 접근
    - target을 만들 수 있는 값의 쌍이 존재하는지 묻는 문제
    - 간단하게 2중 반복문으로 값마다 target-값을 찾아가도 되지만<div>
    시간적인 효율성이 떨어지니 객체에 프로퍼티로 값을 저장하며 target-값이 있는지 찾는 방법으로 문제 해결

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


let twoSum = function(nums, target) {
    
    let arr = {};
    
    for(let i = 0; i<nums.length; i++){
        if(!arr.hasOwnProperty(nums[i])){
            arr[nums[i]] = i;
        }
        
        if(arr.hasOwnProperty(target-nums[i])){
            if(i !== arr[target-nums[i]])
                return [i, arr[target-nums[i]]];
        }
    }
    
};
```