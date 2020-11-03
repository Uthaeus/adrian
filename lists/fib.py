

def fib():
    result = [1, 1]
    result_str = []
    while len(result) < 20:
        temp = result[-2] + result[-1]
        temp_str = "{} + {} = {}".format(result[-2], result[-1], temp)
        result.append(temp)
        result_str.append(temp_str)

    for i in result_str:
        print(i)


fib()