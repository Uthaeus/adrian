

const fib = () => {
    let nums = [1, 1];
    let strings = [];

    while (strings.length < 20){
        let temp = nums[nums.length - 2] + nums[nums.length - 1];
        strings.push(`${nums[nums.length - 2]} + ${nums[nums.length - 1]} = ${temp}`);
        nums.push(temp);
    }

    for (let i in strings) {
        console.log(strings[i]);
    }
}

fib();