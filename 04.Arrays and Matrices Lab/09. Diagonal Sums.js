function getDiagonalSums(params) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < params.length; i++) {
        firstDiagonalSum += params[i][i];
        secondDiagonalSum += params[i][params[i].length - 1 - i];
    }

    console.log(`${firstDiagonalSum} ${secondDiagonalSum}`)
}

getDiagonalSums([[20, 40], [10, 60]]);