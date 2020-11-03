

def for_summer(l):
    s = 0
    for i in l:
        s += i 

    return s 

def while_sum(l):
    s = 0
    x = 0
    while x < len(l):
        s += l[x]
        x += 1
    return s 

def recur_sum(l):
    return reduce((lambda a, b: a + b), l)


temp = [3, 5, 6, 7, 8, 9]

print(for_summer(temp))
print(while_sum(temp))
print(recur_sum(temp))