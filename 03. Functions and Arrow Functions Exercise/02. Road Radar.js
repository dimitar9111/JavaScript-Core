function speedLimit(params) {
    let speed = params[0];
    let area = params[1];

    let limit = getLimit(area);
    if (speed > limit) {
        let result = getInfraction(speed - limit);
        console.log(result);
    }

    function getLimit(area) {
        switch (area) {
            case "motorway":
                return 130;
            case "interstate":
                return 90;
            case "city":
                return 50;
            case "residential":
                return 20;
        }
    }

    function getInfraction(speed) {
        if (speed <= 20) {
            return "speeding";
        } else if (speed <= 40) {
            return "excessive speeding";
        } else {
            return "reckless driving";
        }
    }
}