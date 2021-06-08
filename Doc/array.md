# Array

### Dense array
동일한 크기의 메모리 공간이 연속적으로 나열된 자료구조이다.<br>
*하나의 타입*을 갖고 *연속적으로 인접하는 형태*이다.<br>
내가 일반적으로 사용했던 c++에서의 배열이나 자바에서의 배열 등이 여기에 속한다.<br>
인덱스로 접근시에는 `O(1)`의 시간복잡도로 접근가능하며,<br>
배열을 순회하거나 특정 값을 찾기 위해서는 최대 `O(N)`의 시간복잡도가 필요하다.<br>
연속적으로 이루어진 요소 그 중간에 값을 넣기 위해서는 마찬가지로 최대 `O(N)`의 시간복잡도가 필요하다.<br>


### Sparse array
[참고자료](https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg)<br><br>

자바스크립트에서의 배열은 엄밀히 말하면 배열이 아니다.<br>
하나의 타입이 아니어도 되며, 연속적으로 이루어지지 않는다.<br>
타입이 고정되지 않기 때문에 각 요소의 메모리 공간은 균일하지 않다.<br>
인덱스를 **프로퍼티**로 갖는 객체이다.<br><br>

### Time complexity of mutator method
1. push() - O(1) / 배열의 끝에 요소를 추가
2. pop() - O(1) / 배열의 끝에 요소를 제거
3. shift() - O(N) / 배열 앞 요소를 제거
4. unshift() - O(N) / 배열 앞에 요소를 추가
5. splice() - O(N) / 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가한다
6. sort() - O(NlogN) / 정렬

##### Array.prototype.splice()
splice와 slice가 너무 헷갈려서 정리한다.<br><br>

splice는 요소의 특정 구간을 **삭제**하며, 추가로 **추가/수정**이 가능하다.<br> 
splice는 대상이 되는 원본 배열을 **수정**한다.<br>
반환값은 **삭제된 배열 요소**이다.<br>
`splice(start, deleteCount, value)`<br>
- start : 배열의 변경을 시작할 인덱스
- deleteCount : 삭제할 갯수 (**0으로 둠으로써 삭제하지 않고 수정으로 접근**)
- value : 추가하거나 수정할 값

### Time complexity of accessor method
1. concat() - O(N) / 여러 배열이나 배열에 값을 합쳐 새로운 배열을 만든다.
2. slice() - O(N) / 배열의 begin부터 end-1 까지를 복사하여 반환한다.
3. indexOf() - O(N) / 배열에 특정 요소를 찾으며, 있는 경우 인덱스를 반환한다.

### Time complexity of iterable method
1. forEach() - O(N) / 콜백함수를 모든 요소에 적용한다. (원본 요소가 변경될 수 있다)
2. map() - O(N) / 콜백함수를 모든 요소에 적용한 후, 그 결과값으로 새로운 배열을 반환한다. (원본 요소는 변경X)
3. filter() - O(N) / 콜백함수인 filter 조건에 참인 요소들을 새로운 배열로 반환한다.