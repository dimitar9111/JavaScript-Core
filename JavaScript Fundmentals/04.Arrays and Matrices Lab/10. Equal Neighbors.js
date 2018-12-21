function findEqualNeighboursCount(params) {
    let count = 0;

    for (let row = 0; row < params.length; row++) {
        for (let col = 0; col < params[row].length; col++) {

            if (params[row][col] === params[row][col + 1]) {
                count++;
            }
            if (row !== params.length - 1 && params[row][col] === params[row + 1][col]) {
                count++;
            }
        }
    }

    console.log(count);
}

findEqualNeighboursCount([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);