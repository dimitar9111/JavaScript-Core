function extractFromArray(params) {
    let result = [params[0]];

    for (let i = 1; i < params.length; i++) {
        let currentElement = params[i];
        if (currentElement >= result[result.length - 1]) {
            result.push(currentElement);
        }
    }

    console.log(result.join("\n"));
}

extractFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);