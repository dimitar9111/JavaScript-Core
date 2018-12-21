function matchAndMultiply(params) {
    let regex = /(-?[0-9]+) *\* *(-?[0-9]+\.?[0-9]*)/g;
    params = params.replace(regex, function (match, firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    });

    console.log(params);
}

matchAndMultiply('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');