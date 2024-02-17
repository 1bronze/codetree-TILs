from collections import deque

n, m = map(int, input().split())

dx = [1, 0]
dy = [0, 1]

lst = [list(map(int, input().split())) for i in range(n)]

deq = deque()
deq.append((0, 0))
lst[0][0] = 2
while deq:
    x, y = deq.popleft()

    for i in range(2):
        nx = x + dx[i]
        ny = y + dy[i]

        if nx < 0 or ny < 0 or nx >= n or ny >= m:
            continue
        
        if lst[nx][ny] != 1:
            continue
        
        lst[x][y] = 2
        deq.append((nx, ny))

if lst[n-1][m-1] == 2:
    print(1)
else:
    print(0)