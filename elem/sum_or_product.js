const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

const numCrunch = (num, ind) => {
    let arr = [];
    for (let x = 1; x <= num; x++) {
        arr.push(x);
    }
    if (ind == '+') {
        return arr.reduce((a, b) => a += b);
    } else if (ind == '*') {
        return arr.reduce((a, b) => a *= b);
    } else {
        return 0
    }
}

const sumOrProd = () => {
    rl.question('Enter a number between 1 and 9: ', function(n) {
        rl.question('Enter + for sum or * for product: ', function(i) {
            let result = numCrunch(+n, i);
            if (i == '+') {
                console.log(`The sum for ${n} is: ${result}`);
            } else if (i == '*') {
                console.log(`The product for ${n} is: ${result}`);
            } else {
                console.log('Please enter correct input next time');
            }
            rl.close();
        })
    })
}

rl.on("close", function() {
    process.exit(0);
})

sumOrProd();