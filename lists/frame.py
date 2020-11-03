

def frame(arr):
    max_length = max(len(i) for i in arr)
    total_length = max_length + 4

    border = ''
    for x in range(total_length):
        border += '*'

    print(border)
    for a in arr:
        spaces = max_length - len(a)
        temp = '* ' + a + ' ' * spaces + ' *'
        print(temp)
    print(border)
    


arr = ['Hello', 'World', 'See', 'More', 'Words']

frame(arr)