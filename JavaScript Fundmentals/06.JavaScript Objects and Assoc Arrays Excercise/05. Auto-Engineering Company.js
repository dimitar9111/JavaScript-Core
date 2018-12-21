function storeProductionStatistics(params) {
    let cars = {};

    for (let i = 0; i < params.length; i++) {
        let tokens = params[i].split(' | ');
        let brand = tokens[0];
        let model = tokens[1];
        let producedCarsCount = Number(tokens[2]);

        if (!cars[brand]) {
            cars[brand] = {};
        }

        if (!cars[brand][model]) {
            cars[brand][model] = 0;
        }

        cars[brand][model] += producedCarsCount;
    }

    for (let brand in cars) {
        console.log(brand);

        let models = cars[brand];
        for (let model in models) {
            console.log(`###${model} -> ${models[model]}`);
        }
    }
}

storeProductionStatistics(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
);