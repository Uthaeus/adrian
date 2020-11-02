const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});


const guess = () => {
    let game;
    console.log('Welcome to the guessing game');
    console.log(' ');
    rl.question('press y to start game', function(y) {
        console.log(y);
        game = y;
        rl.close();
    });
    
    while (game == 'y') {
        let num = Math.floor(Math.random * 10);
        let guesses = 3;
        console.log('Enter a number between 1 and 9: ');

        while (guesses > 0) {
            let user_guess;
            rl.question(': ', function(n) {
                user_guess = +n;
                rl.close();
            })
            if (user_guess == num) {
                console.log('You got it!');
                break;
            } else if (user_guess < num) {
                console.log('Too low');
                guesses--;
            } else if (user_guess > num) {
                console.log('Too high');
                guesses--;
            }
        }

        rl.question('press y to play again', function(y) {
            game = y;
            rl.close();
        })
    }

    console.log('Thanks for playing!')
}

rl.on('close', function() {
    process.exit(0);
});


guess();