function getLastKElements(length, elementsCount) {
    let result = [1];

    while (result.length < length) {
        let newElement = result
            .slice(elementsCount * -1)
            .reduce(function (a, b) {
                return a + b;
            });
        result.push(newElement);
    }

    console.log(result.join(" "));
}

getLastKElements(8, 2);