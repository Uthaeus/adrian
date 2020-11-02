

def odds(l):
    x = 0
    while x < len(l):
        if x % 2 != 0:
            print(l[x])
        x += 1


temp = ['a', 'b', 1, 2, 3]

print(odds(temp))