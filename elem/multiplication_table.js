const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});


const table = () => {
    let horiz = [' '];

    rl.question('Enter a number between 1 and 12: ', function(n) {
        for (let x = 1; x <= n; x++) {
            horiz.push(x);
        }
        console.log(horiz.join('  '));
        for (let x = 1; x <= n; x++) {
            let vert = [];
            for (let y = 0; y <= n; y++) {
                if (y == 0) {
                    vert.push(x);
                } else {
                    vert.push(x * y);
                }
            }
            console.log(vert.join('  '));
        }
        rl.close();
    })
}

rl.on('close', function() {
    process.exit(0);
});

table();