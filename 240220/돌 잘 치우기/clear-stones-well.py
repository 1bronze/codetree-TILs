# m개의 돌만 치워, k개의 시작점으로 부터 상하좌우 인접
from collections import deque
n, k, m = map(int,input().split())
graph = [list(map(int,input().split())) for _ in range(n)]
start_points = [list(map(int,input().split())) for _ in range(k)]

def in_range(x,y):
    return 0<=x<n and 0<=y<n

dxs, dys = [0,0,1,-1], [1,-1,0,0]
# 시작점으로부터 방문 가능한 모든 칸 체크
def bfs(x,y,rock):
    global ans
    q = deque()
    q.append((x,y,rock))
    cnt = 1
    while q:
        if cnt>ans:
            ans=cnt
        x,y,rock = q.popleft()
        for dx, dy in zip(dxs, dys):
            nx, ny =x+dx, y+dy
            if not in_range(nx,ny):
                continue
            if visited[nx][ny]:
                continue
            if graph[nx][ny]==0:
                visited[nx][ny]=True
                cnt+=1
                q.append((nx,ny,rock))
            if graph[nx][ny]==1 and rock>=1: # 1이지만 돌로 깸 -> 돌로 부술 수 있는 만큼 부숨
                q.append((nx,ny,rock-1))


visited = [[False]*n for _ in range(n)]
ans = 0
# m개의 돌을 랜덤하게 치운 후 
for r,c in start_points:
    r,c=r-1,c-1
    if visited[r][c]:
        continue
    visited[r][c]=True
    bfs(r,c,m)

print(ans+m)

# 방문안한 0인 지점이 있다면 -> 출발점까지의 거리

# 해설 -> 주어진 돌 중에서 m개의 돌을 치우고 bfs 탐색