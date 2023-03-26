n = int(input())

f = list(map(int, input().split()))

cnt = 0

for i in range(n):
    if f[i] > 0:
        cnt += 1

print(cnt) 
