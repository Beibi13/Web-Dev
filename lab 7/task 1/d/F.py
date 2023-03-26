n = int(input())

f = list(map(int, input().split()))

cnt = 0

for i in range(1, n):
    if f[i] > f[i-1] and f[i] > f[i+1]:cnt += 1
print(cnt)
