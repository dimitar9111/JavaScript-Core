function sumFirstAndLast(params) {
    let result = Number(params[0]) + Number(params[params.length - 1]);
    console.log(result);
}

sumFirstAndLast(["10", "20", "30"]);