function findEvenPositionElements(params) {
    let result = [];

    for (let i = 0; i < params.length; i++) {
        let number = params[i];

        if (i % 2 === 0) {
            result.push(number);
        }
    }

    console.log(result.join(' '));
}

findEvenPositionElements(['0', '1', '2', '3']);