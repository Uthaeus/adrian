

const merge_sort = values => {
    if (values.length > 1) {
        let m = values.length / 2;
        let left = values.slice(0, m);
        let right = values.slice(m, values.length);

        left = merge_sort(left);
        right = merge_sort(right);

        values = [];

        while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                values.push(left[0]);
                left.shift();
            } else {
                values.push(right[0]);
                right.shift();
            }
        }

        for (let i in left) {
            values.push(left[i]);
        }
        for (let i in right) {
            values.push(right[i]);
        }
    }
    return values;
}


let a = [12, 11, 13, 5, 6, 7];
console.log("Given array is");
for (let x in a) {
    console.log(a[x]);
}

a = merge_sort(a);

console.log("Sorted array is : ");
for (let x in a) {
    console.log(a[x]);
}