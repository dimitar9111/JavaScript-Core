function findSegment(params) {
    let x1 = params[0], y1 = params[1];
    let x2 = params[2], y2 = params[3];
    let x3 = params[4], y3 = params[5];

    let firstDistance = getDistance(x1, y1, x2, y2);
    let secondDistance = getDistance(x2, y2, x3, y3);
    let thirdDistance = getDistance(x1, y1, x3, y3);

    let firstAndSecondDistance = firstDistance + secondDistance;
    let secondAndThirdDistance = secondDistance + thirdDistance;
    let firstAndThirdDistance = firstDistance + thirdDistance;

    if (firstAndSecondDistance <= secondAndThirdDistance && firstAndSecondDistance <= firstAndThirdDistance) {
        console.log(`1->2->3: ${firstAndSecondDistance}`);
    } else if (secondAndThirdDistance <= firstAndThirdDistance) {
        console.log(`1->3->2: ${secondAndThirdDistance}`);
    } else {
        console.log(`2->1->3: ${firstAndThirdDistance}`);
    }

    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
}

findSegment([0, 0, 2, 0, 4, 0]);