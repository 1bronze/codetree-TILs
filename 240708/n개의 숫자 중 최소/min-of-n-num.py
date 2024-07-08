# 변수 선언 및 입력
n = int(input())
arr = list(map(int, input().split()))

# 초기값을 적습니다. 최소가 될 첫 번째 후보입니다.
min_val = arr[0]
# 최솟값의 개수를 저장할 변수입니다.
cnt = 0

# 나머지 원소들을 보며 최솟값을 갱신합니다.
for i in range(1, n):
    if min_val > arr[i]:  # 지금까지 나왔던 값들 보다 더 작은 값이라면
        min_val = arr[i]  # 최솟값이 되므로 그 값을 갱신합니다.

# min과 일치하는 원소의 개수를 셉니다.
for i in range(n):
    if arr[i] == min_val:
        cnt += 1

# 출력
print(min_val, cnt, 1)