

def digify(num):
    # s = str(num)
    
    # l = map(lambda x: int(x), s)
    # return l 
    return map(lambda x: int(x), str(num))

print(digify(4321))