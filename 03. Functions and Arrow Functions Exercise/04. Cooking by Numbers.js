function processNumber(params) {
    let number = params.splice(0, 1);

    for (let i = 0; i < params.length; i++) {
        const operation = params[i];

        switch (operation) {
            case "chop":
                number = chop(number);
                console.log(number);
                break;
            case "bake":
                number = bake(number);
                console.log(number);
                break;
            case "dice":
                number = dice(number);
                console.log(number);
                break;
            case "spice":
                number = spice(number);
                console.log(number);
                break;
            case "fillet":
                number = fillet(number);
                console.log(number);
                break;
        }
    }

    function chop(number) {
        return number / 2;
    }

    function bake(number) {
        return number * 3;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return number + 1;
    }

    function fillet(number) {
        return number - number * 0.2;
    }
}
