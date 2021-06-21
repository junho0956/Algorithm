/**
 * heap 은 최댓값 혹은 최솟값을 뽑아내기 위해 사용하는 대표적인 자료구조
 * max heap 은 부모노드의 값이 모든 자식노드의 값보다 큰 자료구조
 * min heap 은 부모노드의 값이 모든 자식노드의 값보다 작은 자료구조
 * 
 * heap은 binary tree로 구현됨
 * 
 * push : O(lgN)
 * pop : O(lgN)
 * top : O(1)
 * 
 * 부모의 왼쪽자식 => parentIdx*2+1
 * 부모의 오른쪽자식 => parentIdx*2+2
 * 자식의 부모 => floor(childIdx-1/2)
 */


/**
 * MAX heap 접근
 * 
 * 변수 :
 * 데이터를 담을 storage 필요 (배열)
 * 
 * 메소드 :
 * push
 * - 배열의 끝에 원소를 추가하고 루트노드까지 부모노드와 비교하면서 교환, 부모 노드가 더 큰 경우 swap 중단
 * pop 
 * - 배열의 첫 원소를 제거하고 배열의 끝 원소를 루트노드로 가져옴
 * - 루트노드부터 자식노드로 내려가면서 자식노드가 더 큰 경우 swap
 * - 자식노드의 인덱스를 벗어나지 않게 주의
 * top
 * - 배열 첫 원소가져옴
 * empty
 * - 배열이 비었는지 확인
 */

class MaxHeap{
    #storage
    #end
    #swap(idx1, idx2){
        let temp = this.#storage[idx1];
        this.#storage[idx1] = this.#storage[idx2];
        this.#storage[idx2] = temp;
    }

    constructor(){
        this.#storage = [];
        this.#end = -1;
    }

    push(value){
        if(this.#storage.length - 1 === this.#end) this.#storage.push(value);
        else this.#storage[this.#end] = value;
        this.#end++;

        let childIdx = this.#end;
        let parentIdx = Math.floor((childIdx-1)/2);
        while(parentIdx>=0){
            if(this.#storage[parentIdx] < this.#storage[childIdx]){
                this.#swap(parentIdx, childIdx);
                childIdx = parentIdx;
                parentIdx = Math.floor((childIdx-1)/2);
            }
        }
    }

    pop(){
        if(this.#end === -1) return null;
        
        let result = this.#storage[0];
        this.#storage[0] = this.#storage[this.#end];
        this.#storage[this.#end] = null;
        this.#end--;

        let parentIdx = 0;
        let childIdx = 2;
        if(childIdx+1 <= this.#end && this.#storage[childIdx] < this.#storage[childIdx+1]) childIdx++;

        while(childIdx <= this.#end){
            if(this.#storage[parentIdx] < this.#storage[childIdx]){
                this.#swap(parentIdx, childIdx);
                parentIdx = childIdx;
                childIdx = childIdx*2+1;
                if(childIdx+1 <= this.#end && this.#storage[childIdx] < this.#storage[childIdx+1]) childIdx++;
            }
        }

        console.log('pop clear!');
        return result;
    }

    top(){
        if(this.#end === -1) return null;
        else return this.#storage[0];
    }

    empty(){
        if(this.#end === -1) return true;
        else return false;
    }
}