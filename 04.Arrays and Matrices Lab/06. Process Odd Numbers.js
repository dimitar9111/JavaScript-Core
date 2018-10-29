function processOddNumbers(params) {
    let result = [];

    for (let i = 0; i < params.length; i++) {
        if (i % 2 !== 0) {
            result.push(params[i] * 2);
        }
    }

    console.log(result.reverse().join(' '));
}

processOddNumbers([10, 15, 20, 25]);