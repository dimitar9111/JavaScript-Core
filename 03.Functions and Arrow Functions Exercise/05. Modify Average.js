function modifyNumber(number) {
    let numberAsString = '' + number;

    while (true) {
        let sum = 0;
        for (let element of numberAsString) {
            sum += parseInt(element);
        }

        if (sum / numberAsString.length > 5) {
            break;
        }
        numberAsString += '9';
    }

    console.log(numberAsString);
}

modifyNumber(101);