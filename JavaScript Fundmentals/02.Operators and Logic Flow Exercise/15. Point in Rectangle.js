function pointInrectangle(params) {
    let x = params[0];
    let y = params[1];
    let xMin = params[2];
    let xMax = params[3];
    let yMin = params[4];
    let yMax = params[5];

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}

pointInrectangle([8, -1, 2, 12, -3, 3]);