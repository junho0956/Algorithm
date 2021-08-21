# Median In Stream
데이터 스트림간 중간값 구하기

### example
1,3,5,7,9,3,4 가 연속적으로 주어질 때, 중간값은?<br>
단, 짝수개일 경우 작은 값을 선택함<br>
1 1 3 3 5 3 4<br>

### 접근
매 값을 추가할 때마다 정렬을 한다면 O(N^2logN)<br>
Max Heap, Min Heap 을 이용해서 O(NlogN)으로 효율적으로 해결가능<br>

### 원리
Max Heap, Min Heap 으로 중간값을 계산
- 조건
    1. Max Heap과 Min Heap의 size 차이는 1 이하로 유지
    2. Max Heap의 루트원소는 Min Heap의 루트원소보다 작거나 같아야함<br>(즉, Min Heap의 모든 원소는 Max Heap의 루트 원소보다 크거나 같음)
    3. 두 heap의 size를 같게 하고 max heap과 min heap의 루트 swap을 통해 중간값은 항상 max heap의 루트원소가 된다. 


### 문제
<a href="https://www.acmicpc.net/problem/1655" target="_blank">BOJ 1655 가운데를 말해요</a><br>
<a href="https://www.acmicpc.net/problem/2696" target="_blank">BOJ 2696 중앙값 구하기</a><br>
<a href="https://programmers.co.kr/learn/courses/30/lessons/81303" target="_blank">Programmers 2021 카카오 인턴십 - 표 편집</a><br>