function sortNumbers(params) {
    let result = [];

    for (let i = 0; i < params.length; i++) {
        let number = params[i];

        if (number >= 0) {
            result.push(number);
        } else {
            result.unshift(number);
        }
    }

    console.log(result.join('\n'));
}

sortNumbers([7, -2, 8, 9]);