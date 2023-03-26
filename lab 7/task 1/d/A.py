n = int(input())

f = list(map(int, input().split()))

print(*f[::2])
