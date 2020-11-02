

def hey():
    print("Hey, what's your name?")
    username = raw_input()

    if username == 'Alice' or username == 'Bob':
        print('Hello there, {}'.format(username))
    else:
        print('Beat it')


hey()