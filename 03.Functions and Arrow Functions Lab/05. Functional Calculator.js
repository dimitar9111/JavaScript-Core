function calculate(a, b, operation) {
    let calculate = function (a, b, func) {
        return func(a, b)
    };

    let add = function (a, b) {
        return a + b;
    };

    let subtract = function (a, b) {
        return a - b;
    };

    let multiply = function (a, b) {
        return a * b;
    };

    let divide = function (a, b) {
        return a / b;
    };

    switch (operation) {
        case "+":
            console.log(calculate(a, b, add));
            break;
        case "-":
            console.log(calculate(a, b, subtract));
            break;
        case "*":
            console.log(calculate(a, b, multiply));
            break;
        case "/":
            console.log(calculate(a, b, divide));
            break;
    }
}

calculate(2, 5, "-");