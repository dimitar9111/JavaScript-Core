function calculateDistance(params) {
    let firstObjectSpeed = params[0];
    let secondObjectSpeed = params[1];
    let time = params[2] / 60 / 60;

    console.log(Math.abs((firstObjectSpeed * time) - (secondObjectSpeed * time)) * 1000);
}

calculateDistance([0, 60, 3600])