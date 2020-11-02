
def sum_or_product():
    print("Please enter a number between 1 and 9:")
    num = int(input())
    print("Your input: {}".format(num))
    print("Would you like the sum or the product?")
    print("Enter + for sum")
    print("Enter * for product")


    my_range = range(1, num + 1)

    user_in = raw_input()

    print(user_in)

    if user_in == '+':
        prod = reduce((lambda a, b: a + b), my_range)
        print("The sum for {} is: {}".format(num, prod))
    elif user_in == '*':
        prod = reduce((lambda a, b: a * b), my_range)
        print("The product for {} is: {}".format(num, prod))



sum_or_product()