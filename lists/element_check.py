

def check(l, e):
    flag = False 
    for i in l:
        if i == e:
            flag = True 
    return flag 

l = ['a', 'b', 3]

print(check(l, 'a'))
print(check(l, 'c'))