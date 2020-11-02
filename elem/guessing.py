import random

def guess():
    print("Welcome to the guessing game")
    print(" ")
    print("Press y and enter to play:" )
    game = raw_input()

    while game == 'y':
        num = random.randint(1, 9) 
        guesses = 3  
        print("Guess a number between 1 and 9: ")
        while guesses > 0:
            
            user_guess = int(input()) 

            if user_guess == num:
                print('You got it!')
                break 
            elif user_guess > num:
                print('That is too high')
                guesses -= 1
            elif user_guess < num:
                print('That is too low')
                guesses -= 1
            
            if guesses == 0:
                print("Out of guesses :(")

        print("Enter y to try again")
        game = raw_input()

    print("Thanks for playing")


guess()
    