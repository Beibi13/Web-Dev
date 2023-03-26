n = int(input())

f = list(map(int, input().split()))

cnt = 0

for i in range(1,n):
    if f[i-1] < f[i]:
        cnt += 1
print(cnt) 
