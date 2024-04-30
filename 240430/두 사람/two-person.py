a, b = input().split()
c, d = input().split()
a, c = int(a), int(c)

if b == 'M':
    if a >= 19:
        print(1)
    else:
        print(0)

elif d == 'M':
    if c >= 19:
        print(1)
    else:
        print(0)
else:
    print(0)