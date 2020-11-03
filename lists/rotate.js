

const rotate = (arr, n) => {
    while (n > 0) {
        arr.push(arr.shift());
        n--;
    }
    return arr;
}

let a = [1, 2, 3, 4, 5];

console.log(rotate(a, 2));