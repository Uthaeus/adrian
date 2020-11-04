

def piggy(s):
    arr = s.split(' ')
    vowels = 'aeiou'
    result = []

    for word in arr:
        cap = False 
        if len(word) > 3:
            if word[0] == word[0].upper():
                cap = True 
            pre = ''
            x = 0
            if word[x] not in vowels:
                pre += word[x]
                x += 1
            else:
                while word[x] in vowels:
                    pre += word[x]
                    x += 1
            temp = word[x:] + pre + 'ay'
            if cap:
                temp = temp.lower().capitalize()
            result.append(temp)
        else:
            result.append(word)

    return ' '.join(result)

text = 'this is a test'

print(piggy(text))