

def digify(num):
    s = str(num)
    
    l = map(lambda x: int(x), s)
    return l 

print(digify(4321))