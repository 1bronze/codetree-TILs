a,b = map(int,input().split())
cnnnt = 0
for i in range(a,b+1):
    cnnt = 0
    for j in range(1,i+1):
        if i % j == 0:
            cnnt += 1
    if cnnt == 3:
        cnnnt += 1
print(cnnnt)