

const frame = arr => {
    let lengths = arr.map(a => a.length);
    let max_length = Math.max(...lengths);
    let total_length = max_length + 4;

    let border = '*'.repeat(total_length);

    console.log(border);
    for (let x in arr) {
        let spaces = max_length - arr[x].length;
        let temp = '* ' + arr[x] + ' '.repeat(spaces) + ' *';
        console.log(temp);
    }
    console.log(border);
}


let arr = ['Hello', 'World', 'one', 'more', 'time'];

frame(arr);