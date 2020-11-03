

def rotate(l, n):
    while n > 0:
        l.append(l.pop(0))
        n -= 1

    return l 

temp = [1, 2, 3, 4, 5]

print(rotate(temp, 2))