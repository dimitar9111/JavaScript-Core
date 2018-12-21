function roundNumber(params) {
    let number = params[0];
    let precision = params[1];

    let factor = Math.pow(10, precision);
    console.log(Math.round(number * factor) / factor);
}

roundNumber([3.132321312312, 3]);