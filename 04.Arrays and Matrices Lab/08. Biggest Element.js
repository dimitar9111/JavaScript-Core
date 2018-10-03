function findBiggestNumber(params) {
    let maxElement = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < params.length; row++) {
        for (let col = 0; col < params[row].length; col++) {
            if (params[row][col] > maxElement) {
                maxElement = params[row][col];
            }
        }
    }

    console.log(maxElement);
}

findBiggestNumber([[20, 50, 10], [8, 33, 145]]);
