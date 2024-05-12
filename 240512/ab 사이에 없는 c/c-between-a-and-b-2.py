a, b, c = map(int, input().split())
s = True

for i in range(a, b + 1):
    if i % c != 0:
        s = False
    else:
        s = True
if s == False:
    print('YES')
else:
    print('NO')