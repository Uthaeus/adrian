

const perfect = () => {
    let result = [];
    for (let x = 1; x <= 20; x++) {
        let temp = `${x} * ${x} = ${x * x}`;
        result.push(temp);
    }

    for (let i in result) {
        console.log(result[i]);
    }
}


perfect();