

def alternate(l1, l2):
    result = []
    x = 0
    while x < len(l1):
        result.append(l1[x])
        result.append(l2[x])
        x += 1
    return result 

temp1 = ['a', 'b', 'c']
temp2 = [1, 2, 3]

print(alternate(temp1, temp2))