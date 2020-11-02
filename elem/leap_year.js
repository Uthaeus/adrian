

const leap = () => {
    let date = new Date();
    let year = date.getFullYear();
    let years = [];

    for (; years.length < 20; year++) {
        if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
            years.push(year);
        }
    }

    for (y in years) {
        console.log(years[y]);
    }

}


leap();