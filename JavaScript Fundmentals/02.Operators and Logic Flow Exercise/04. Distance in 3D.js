function calculateDistance(params) {
    let firstX = params[0];
    let firstY = params[1];
    let firstZ = params[2];
    let secondX = params[3];
    let secondY = params[4];
    let secondZ = params[5];

    let distance = Math.sqrt(
        (Math.pow((secondX - firstX), 2) +
            (Math.pow((secondY - firstY), 2) +
                (Math.pow((secondZ - firstZ), 2)))
        )
    );

    console.log(distance);
}

calculateDistance([1, 1, 0, 5, 4, 0]);