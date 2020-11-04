

const piggy = str => {
    let arr = str.split(' ');
    let result = [];

    for (word in arr) {
        let isCap = false;
        let vowels = 'aeiou';

        if (arr[word].length > 3) {
            let x = 0, pre = '';
            if (arr[word][0] == arr[word][0].toUpperCase()) isCap = true;
            for (l in arr[word]) {
                if (!vowels.includes(arr[word][l])) {
                    console.log('not in vowels');
                    pre += arr[word][l];
                    x++;
                } else {
                    while (vowels.includes(arr[word][x])) {
                        console.log('in vowels');
                        pre += arr[word][x];
                        x++;
                    }
                }
                let temp = arr[word].slice(x) + pre + 'ay';

                if (isCap) {
                    temp = temp.toLowerCase()
                    temp = temp[0].toUpperCase() + temp.slice(1);
                }
                result.push(temp);
            }
        } else {
            result.push(arr[word]);
        }
    }
    return result.join(' ');
}

let s = 'This is a test';

console.log(piggy(s));