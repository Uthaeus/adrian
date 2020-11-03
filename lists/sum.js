

const for_sum = (arr) => {
    let total = 0;
    for (a in arr) {
        total += arr[a];
    }

    return total;
}

const while_sum = arr => {
    let total = 0;
    while (arr.length > 0) {
        total += +arr.pop();
    }

    return total;
}

const recur_sum = arr => {
    let num = arr.reduce((a, b) => a + b);
    return num;
}

let temp = [2, 4, 5, 6, 7, 8, 9];

console.log(for_sum(temp));

console.log(recur_sum(temp));
console.log(while_sum(temp));