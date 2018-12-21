function getTwoSmallestNumbers(params) {
    let result = params.sort((a, b) => a - b).slice(0, 2);
    console.log(result.join(" "));
}

getTwoSmallestNumbers([30, 15, 50, 5]);