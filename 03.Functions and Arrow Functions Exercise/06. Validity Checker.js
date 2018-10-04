function isValid(params) {
    let firstPoint = {x: params[0], y: params[1]};
    let secondPoint = {x: params[2], y: params[3]};
    let zeroPoint = {x: 0, y: 0};

    console.log(`{${firstPoint.x}, ${firstPoint.y}} to {0, 0} is` +
        ` ${isDistanceValid(firstPoint, zeroPoint) ? 'valid' : 'invalid'}`);
    console.log(`{${secondPoint.x}, ${secondPoint.y}} to {0, 0} is` +
        ` ${isDistanceValid(secondPoint, zeroPoint) ? 'valid' : 'invalid'}`);
    console.log(`{${firstPoint.x}, ${firstPoint.y}} to {${secondPoint.x}, ${secondPoint.y}} is` +
        ` ${isDistanceValid(firstPoint, secondPoint) ? 'valid' : 'invalid'}`);

    function isDistanceValid(firstPoint, secondPoint) {
        let distance = Math.sqrt(
            (secondPoint.x - firstPoint.x) * (secondPoint.x - firstPoint.x) +
            (secondPoint.y - firstPoint.y) * (secondPoint.y - firstPoint.y)
        );

        return Number.isInteger(distance);
    }
}

isValid([3, 0, 0, 4]);
isValid([2, 1, 1, 1]);