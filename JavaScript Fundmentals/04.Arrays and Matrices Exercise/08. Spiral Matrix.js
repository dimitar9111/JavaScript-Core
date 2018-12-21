function generateMatrix(rowsCount, colsCount) {
    let matrix = createMatrix(rowsCount, colsCount);
    fillMatrix();
    printMatrix(matrix);

    function fillMatrix(currentValue = 1, stepIndex = 0) {
        for (let col = stepIndex; col < matrix[stepIndex].length - stepIndex; col++) {
            matrix[stepIndex][col] = currentValue++;
        }

        for (let row = stepIndex + 1; row < matrix.length - stepIndex; row++) {
            matrix[row][matrix[0].length - 1 - stepIndex] = currentValue++;
        }

        for (let col = matrix.length - 2 - stepIndex; col > stepIndex; col--) {
            matrix[matrix.length - 1 - stepIndex][col] = currentValue++;
        }

        for (let row = matrix.length - stepIndex - 1; row > stepIndex; row--) {
            matrix[row][stepIndex] = currentValue++;
        }

        if (currentValue <= matrix.length * matrix[0].length) {
            stepIndex++;
            fillMatrix(currentValue, stepIndex);
        }
    }

    function createMatrix(rowsCount, colsCount) {
        let result = [];

        for (let row = 0; row < rowsCount; row++) {
            result.push(new Array(colsCount));
        }

        return result;
    }

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(" "))
        }
    }
}

generateMatrix(5, 5);