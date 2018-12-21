function printStoreCatalogue(params) {
    let catalogue = new Map();

    for (let i = 0; i < params.length; i++) {
        let tokens = params[i].split(' : ');
        let productName = tokens[0];
        let price = Number(tokens[1]);

        let product = ` ${productName}: ${price}`

        let group = productName[0];

        if (!catalogue.get(group)) {
            catalogue.set(group, []);
        }
        catalogue.get(group).push(product);
    }


    for (let group of [...catalogue.entries()].sort()) {
        console.log(group[0]);

        let section = group[1].sort();
        for (let product of section) {
            console.log(product);
        }
    }
}

printStoreCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);