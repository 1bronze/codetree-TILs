a, b = input().split()
c, d = input().split()
a, c = int(a), int(c)

if b == 'M':
    if max(a, c) >= 19:
        print(1)
    else:
        print(0)

elif d == 'M':
    if max(a, c) >= 19:
        print(1)
    else:
        print(0)
else:
    print(0)