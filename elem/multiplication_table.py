

def table():
    horizontal = [' ']
    print('Enter a number between 1 and 12: ')
    num = int(input())
    rng = range(1, num + 1)

    for n in rng:
        horizontal.append(n)

    result = "  ".join(str(v) for v in horizontal)
    print(result)

    x = 1
    while x <= num:
        y = 0
        vert = []
        while y <= num:
            if y == 0:
                vert.append(x)
            else:
                vert.append(x * y)
            y += 1
        temp = '  '.join(str(v) for v in vert)
        print(temp)

        x += 1


table()