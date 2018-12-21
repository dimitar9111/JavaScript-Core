function storeUniqueArrays(params) {
    let storedArrays = new Set();

    for (let i = 0; i < params.length; i++) {
        let numbers = JSON.parse(params[i]).sort((a, b) => (b - a));

        storedArrays.add(JSON.stringify(numbers));
    }

    let resultArrays = [...storedArrays].map(a => JSON.parse(a));

    for (let storedArray of resultArrays.sort((a, b) => (a.length - b.length))) {
        console.log(`[${storedArray.join(', ')}]`);
    }
}

storeUniqueArrays(
    ['[7.14, 7.180, 7.339, 80.099]',
        '[7.339, 80.0990, 7.140000, 7.18]',
        '[7.339, 7.180, 7.14, 80.099]']
);