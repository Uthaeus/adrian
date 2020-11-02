

const odds = (arr) => {
    for (let x = 0; x < arr.length; x++) {
        if (x % 2 != 0) {
            console.log(arr[x]);
        }
    }
}

let temp = ['a', 'b', 1, 2, 3];

console.log(odds(temp));