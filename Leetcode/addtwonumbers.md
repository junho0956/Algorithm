[LeetCode - Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
*LeetCode - Add Two Numbers with javascript*

- 문제 접근
    - 처음에는 주어진 l1, l2를 어떻게 접근하는 것인지 몰라 당황했는데, 알고보니 l1, l2 라는 데이터는 미리 만들어진 ListNode라는 단일 리스트 구조를 활용하는 문제였다.
    - l1, l2의 프로퍼티 값들을 이용해서 문제에서 요구하는대로 문제를 해결해주면 된다.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let addTwoNumbers = function(l1, l2) {
    let node = null;
    let carry = arguments[2];
    if(l1 || l2){
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let next1 = l1 ? l1.next : null;
        let next2 = l2 ? l2.next : null;
        let val = carry ? val1+val2+1 : val2+val1;
        node = new ListNode(val%10);
        node.next = addTwoNumbers(next1, next2, val >= 10);
    }
    else if(carry){
        node = new ListNode(1);
        node.next = null;
    }
    return node;
};
```