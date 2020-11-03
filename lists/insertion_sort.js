

const sorter = arr => {
    for (let i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

let arr = [12, 11, 13, 5, 6];
sorter(arr); 
console.log("Sorted array is:");

for (let i in arr) {
    console.log(arr[i]);
}