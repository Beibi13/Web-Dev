n = int(input())

f = list(map(int, input().split()))

for i in range(n):
    if f[i] % 2 == 0:
        print(f[i], end=' ')
