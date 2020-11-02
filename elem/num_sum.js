const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
}); 

const num_sum = num => {
    let result = [];
    for (let x = 1; x <= num; x++) {
        result.push(x);
    }
    return result.reduce((a, b) => a += b);
}

const hey_there = () => {
    let num;
    rl.question('Enter a number between 1 and 99 ', function(n) {
        let temp = num_sum(+n)
        console.log(`Your sum is ${temp}`);
        rl.close();
    })
}

rl.on('close', function() {
    process.exit(0);
});

hey_there();