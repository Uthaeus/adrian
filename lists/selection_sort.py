import sys


A = [64, 25, 12, 22, 11]

def sorter(l):
    for i in range(len(l)):
        min_idx = 1

        for j in range(i + 1, len(l)):
            if l[min_idx] > l[j]:
                min_idx = j 

        l[i], l[min_idx] = l[min_idx], l[i]

    for i in range(len(l)):
        print(l[i])

print(sorter(A))