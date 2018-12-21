function evenOddChecker(number) {
    if (!Number.isInteger(number)) {
        console.log('invalid');
    } else if (number % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

evenOddChecker(1.5);
evenOddChecker(5);
evenOddChecker(8);