function printOrbitOfPoint(params) {
    let matrixRows = params[0];
    let matrixCols = params[1];
    let x = params[2];
    let y = params[3];

    let matrix = createMatrix();
    let currentValue = 1;
    matrix[x][y] = currentValue;

    setLayers();
    console.log(matrix.map(row => row.join(' ')).join('\n'));

    function setLayers() {
        //fill above and below
        let upperRow = x - currentValue;
        let lowerRow = x + currentValue;
        let targetCol = Math.max(y - currentValue);

        while (targetCol < matrix[0].length && targetCol <= y + currentValue) {
            //fill above
            if (upperRow >= 0) {
                matrix[upperRow][targetCol] = currentValue + 1;
            }

            //fill below
            if (lowerRow < matrix.length) {
                matrix[lowerRow][targetCol] = currentValue + 1;
            }

            targetCol++;
        }

        //fill left and right
        let leftCol = y - currentValue;
        let rightCol = y + currentValue;
        let targetRow = Math.max(0, x - currentValue);

        while (targetRow < matrix.length && targetRow < x + currentValue) {
            //fill to the left
            if (leftCol >= 0) {
                matrix[targetRow][leftCol] = currentValue + 1;
            }

            //fill to the right
            if (rightCol < matrix[0].length) {
                matrix[targetRow][rightCol] = currentValue + 1;
            }

            targetRow++;
        }

        currentValue++;
        if (currentValue >= matrix.length && currentValue >= matrix[0].length) {
            return;
        }

        setLayers();
    }

    function createMatrix() {
        let matrix = [];

        for (let i = 0; i < matrixRows; i++) {
            matrix.push(new Array(matrixCols));
        }

        return matrix;
    }
}


printOrbitOfPoint([4, 4, 0, 0]);
console.log();
printOrbitOfPoint([5, 5, 2, 2]);