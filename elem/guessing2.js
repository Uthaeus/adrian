const prompt = require('prompt-sync')({sigint: true});


const guess = () => {
    console.log('Welcome to the guessing game');
    console.log(' ');
    let game = prompt('Enter y to play');

    while (game == 'y') {
        let num = Math.floor(Math.random() * 10);
        let guesses = 3;

        while (guesses > 0) {
            let user_guess = prompt('Enter a number between 1 and 9: ');

            if (user_guess == num) {
                console.log('You got it!');
                break;
            } else if (user_guess < num) {
                console.log('Too low');
                guesses--;
            } else if (user_guess > num) {
                console.log('Too high')
                guesses--;
            }
            if (guesses == 0) {
                console.log('Out of guesses');
            }
        }
        game = prompt('Enter y to play again');
    }

    console.log('Thanks for playing!');
}

guess();