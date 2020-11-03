import math 

def perfect():
    result = []
    x = 1

    while len(result) < 20:
        root = math.sqrt(x)
        if root % 1 == 0 and root * root == x:
            result.append("{} * {} = {}".format(int(root), int(root), x))

        x += 1
    
    for r in result:
        print(r)

perfect()