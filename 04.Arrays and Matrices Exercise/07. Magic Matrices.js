function magicMatrix(params) {
    let summedRowsAndColons = [];

    for (let row = 0; row < params.length; row++) {
        let rowSum = params[row].reduce((a, b) => a + b);
        summedRowsAndColons.push(rowSum);
    }

    for (let col = 0; col < params[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < params.length; row++) {
            colSum += params[row][col];
        }
        summedRowsAndColons.push(colSum);
    }

    let isMagic = true;
    for (let i = 1; i < summedRowsAndColons.length; i++) {
        if (summedRowsAndColons[i] !== summedRowsAndColons[i - 1]) {
            isMagic = false;
        }

    }

    console.log(isMagic);
}

magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);