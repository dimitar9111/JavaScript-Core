function lowestPrices(params) {
    let products = new Map();

    for (let i = 0; i < params.length; i++) {
        let tokens = params[i].split(/\s\|\s/);
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);

        if (!products.get(product)) {
            products.set(product, new Map());
        }

        products.get(product).set(town, price);
    }

    for (let product of products) {
        let cityAndPrice = [...product[1]].sort((a, b) => a[1] - b[1])[0];
        console.log(`${product[0]} -> ${cityAndPrice[1]} (${cityAndPrice[0]})`)
    }
}

lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);