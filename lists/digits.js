

const digify = num => {
    return num.toString().split('').map(a => +a);
}


console.log(digify(2432));