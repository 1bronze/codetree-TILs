from collections import deque

# 변수 선언 및 입력
n, k, m = tuple(map(int, input().split()))
a = [
    list(map(int, input().split()))
    for _ in range(n)
]

ans = 0
s_pos = []
stone_pos = [
    (i, j)
    for i in range(n)
    for j in range(n)
    if a[i][j] == 1
]
selected_stones = []

# bfs에 필요한 변수들 입니다.
q = deque()
visited = [
    [False for _ in range(n)]
    for _ in range(n)
]


def in_range(x, y):
    return 0 <= x and x < n and 0 <= y and y < n


def can_go(x, y):
    return in_range(x, y) and not a[x][y] and not visited[x][y]


def bfs():
    # queue에 남은 것이 없을때까지 반복합니다.
    while q:
        # queue에서 가장 먼저 들어온 원소를 뺍니다.
        x, y = q.popleft()

        dxs, dys = [1, -1, 0, 0], [0, 0, 1, -1]

        # queue에서 뺀 원소의 위치를 기준으로 4방향을 확인해봅니다.
        for dx, dy in zip(dxs, dys):
            nx, ny = x + dx, y + dy

            # 아직 방문한 적이 없으면서 갈 수 있는 곳이라면
            # 새로 queue에 넣어주고 방문 여부를 표시해줍니다. 
            if can_go(nx, ny):
                q.append((nx, ny))
                visited[nx][ny] = True


def calc():
    for x, y in selected_stones:
        a[x][y] = 0
	
    for i in range(n):
        for j in range(n):
            visited[i][j] = False
		
    # k개의 시작점을 queue에 넣고 시작합니다.
	# BFS는 여러 시작점에서 시작하여
    # 이동 가능한 칸을 전부 탐색하는 것이 가능합니다.
    for x, y in s_pos:
        q.append((x, y))
        visited[x][y] = True

    bfs()
	
    for x, y in selected_stones:
        a[x][y] = 1
        
    cnt = 0
    for i in range(n):
        for j in range(n):
            if visited[i][j]:
                cnt += 1
    
    return cnt


def find_max(idx, cnt):
    global ans
    
    if idx == len(stone_pos):
        if cnt == m:
            ans = max(ans, calc())
        return

    selected_stones.append(stone_pos[idx])
    find_max(idx + 1, cnt + 1)
    selected_stones.pop()
	
    find_max(idx + 1, cnt)


for _ in range(k):
    r, c = tuple(map(int, input().split()))
    s_pos.append((r - 1, c - 1))
    
find_max(0, 0)
print(ans)