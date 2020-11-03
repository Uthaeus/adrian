let A = [64, 25, 12, 22, 11];

const sorter = arr => {
    for(let i in arr) {
        let min_idx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_idx] > arr[j]) {
                min_idx = j;
            }
        }
        [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    }
    for (let i in arr) {
        console.log(arr[i]);
    }
}


sorter(A);