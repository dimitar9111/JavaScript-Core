function calculateDistance(x1, y1, x2, y2) {
    let firstPoint = {x: x1, y: y1};
    let secondPoint = {x: x2, y: y2};

    let firstDistance = Math.pow(firstPoint.x - secondPoint.x, 2);
    let secondDistance = Math.pow(firstPoint.y - secondPoint.y, 2);

    console.log(Math.sqrt(firstDistance + secondDistance));
}

calculateDistance(1, 4, 2, 3);