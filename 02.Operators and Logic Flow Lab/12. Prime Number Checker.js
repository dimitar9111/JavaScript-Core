function primeChecker(number) {
    if (number < 2) {
        console.log('false');
        return;
    }

    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log('false');
            return;
        }
    }

    console.log('true');
}

primeChecker(7);
primeChecker(2);
primeChecker(46);