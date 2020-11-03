

const alternate = (arr1, arr2) => {
    let result = [];
    for (let x = 0; x < arr1.length; x++) {
        result.push(arr1[x]);
        result.push(arr2[x]);
    }

    return result;
}

let a = ['a', 'b', 'c'];
let b = [1, 2, 3]

console.log(alternate(a, b));