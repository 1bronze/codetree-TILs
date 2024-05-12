import sys

sys.setrecursionlimit(10000)
n , m = map(int, input().split())

graph = [
    list(map(int, input().split()))
    for _ in range(n)
]

safe_zone = [
    [False for _ in range(m)] for _ in range(n)
]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < m

max_num = 0    #최대 높이
for i in range(n):      
    for j in range(m):
        if max_num < graph[i][j]:
            max_num = graph[i][j]
        
def can_go(x, y, k):
    
    if not in_range(x, y):
        return False
    if graph[x][y] <= k:
        return False
    if safe_zone[x][y] == True:
        return False
    return True
    

def dfs(x, y, k):
    
    dxs, dys= [1,-1,0,0], [0,0,-1,1]
    
    for dx, dy in zip(dxs, dys):
        nx , ny = x + dx, y + dy
        
        if can_go(nx, ny, k):
            safe_zone[nx][ny] = True
            dfs(nx, ny, k)
    return

Final = {}

for k in range(1,max_num+1):
    cnt = 0
    safe_zone = [[False for _ in range(m)] for _ in range(n)]
    for i in range(n):
        for j in range(m):
            if graph[i][j] > k and not safe_zone[i][j]:
                cnt += 1
                safe_zone[i][j] = True
                dfs(i, j, k)
            Final[k] = cnt
     
    
answer_k, answer_num = -1, -1
for i, j in Final.items():
    if answer_num < j:
        answer_num = j
        answer_k = i
    
print(answer_k, answer_num)