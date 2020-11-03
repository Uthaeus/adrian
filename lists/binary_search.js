

const binarySearch = (arr, l, r, x) => {
    if (r >= 1) {
        let mid = 1 + (r - 1);

        if (arr[mid] == x) {
            return mid;
        } else if (arr[mid] > x) {
            return binarySearch(arr, l, mid - 1, x);
        } else {
            return binarySearch(arr, mid + 1, r, x);
        }
    } else {
        return -1;
    }
}

let arr = [ 2, 3, 4, 10, 40 ] 
let x = 10
  
let result = binarySearch(arr, 0, arr.length - 1, x) 
  
if (result != -1) { 
    console.log(`Element is present at index ${result}`);
} else { 
    console.log("Element is not present in array");
}