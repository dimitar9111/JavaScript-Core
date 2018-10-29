function aggregateElements(params) {
    function aggregate(array, initialValue, func) {
        let value = initialValue;
        for (let i = 0; i < array.length; i++) {
            value = func(value, array[i]);
        }

        console.log(value);
    }

    aggregate(params, 0, (a, b) => a + b);
    aggregate(params, 0, (a, b) => a + 1 / b);
    aggregate(params, '', (a, b) => a + b);
}


aggregateElements([1, 2, 3]);