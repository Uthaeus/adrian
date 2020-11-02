const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
}); 

const hey = () => {
    rl.question("Hey, what's your name?", function(name){
        console.log(`Hello ${name}`);
        rl.close();
    })
}

rl.on("close", function() {
    console.log("exiting....");
    process.exit(0);
})

hey();