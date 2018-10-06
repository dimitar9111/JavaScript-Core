function diagonalAttack(params) {
    let matrix = [];

    for (let i = 0; i < params.length; i++) {
        matrix.push(params[i].split(" ").filter(s => s !== "").map(Number));
    }

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][matrix[i].length - 1 - i];
    }

    if (firstDiagonalSum === secondDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row !== col && col != matrix[row].length - 1 - row) {
                    matrix[row][col] = firstDiagonalSum;
                }
            }
        }
    }
    
    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(" "))
    }

}

diagonalAttack(
    ["5 3 12 3 1",
        "11 4 23 2 5",
        "101 12 3 21 10",
        "1 4 5 2 2",
        "5 22 33 11 1"]);