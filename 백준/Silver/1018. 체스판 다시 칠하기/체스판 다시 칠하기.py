N, M = map(int, input().split())
lst = [input() for _ in range(N)]
Min = 64
for row in range(N-7):
    for col in range(M-7):
        cnt1 = 0
        cnt2 = 0
        for i in range(row, row+8):
            for j in range(col, col+8):
                if (i + j) % 2 == 0:
                    if lst[i][j] != 'W':
                        cnt1 += 1
                    if lst[i][j] != 'B':
                        cnt2 += 1
                else:
                    if lst[i][j] != 'B':
                        cnt1 += 1
                    if lst[i][j] != 'W':
                        cnt2 += 1

        if cnt1 > cnt2:
            cnt1 = cnt2
        if Min > cnt1:
            Min = cnt1

print(Min)