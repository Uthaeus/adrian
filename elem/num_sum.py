

def num_sum(num):
    r = range(1, num + 1)
    result = reduce((lambda a, b: a + b), r)
    return result 


def hey_there():
    print('Enter a number between 1 and 99')
    num = raw_input()
    summed = num_sum(int(num))
    print('Your sum is {}'.format(summed))


hey_there()