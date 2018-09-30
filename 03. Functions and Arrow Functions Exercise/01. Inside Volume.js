function findInsideVolume(params) {

    for (let i = 0; i < params.length; i += 3) {
        let x = params[i];
        let y = params[i + 1];
        let z = params[i + 2];

        let result = isInside(x, y, z);
        if (result) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }

    function isInside(x, y, z) {
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        if (x >= x1 && x <= x2 &&
            y >= y1 && y <= y2 &&
            z >= z1 && z <= z2) {
            return true;
        }

        return false;
    }
}