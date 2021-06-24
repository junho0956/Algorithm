[Leetcode - binary tree level order traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
*Leetcode binary tree level order traversal with javascript*

- 문제 접근
    - dfs를 통해 순회하면서 depth 별로 리턴값에 추가시켜주면 된다.

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

let answer;

function dfs(node, height){
    if(!node) return;
    
    if(answer.length < height){
        answer.push([]);
    }
    answer[height-1].push(node.val);
    
    if(node.left) dfs(node.left, height+1);
    if(node.right) dfs(node.right, height+1);   
}

var levelOrder = function(root) {
    answer = [];
    dfs(root, 1);
    return answer;
};
```