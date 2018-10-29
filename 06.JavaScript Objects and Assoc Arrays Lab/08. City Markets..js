function printAggregatedTownIncome(params) {
    let towns = {};

    for (let i = 0; i < params.length; i++) {
        let tokens = params[i].split(/\s->\s|\s:\s/);
        let town = tokens[0];
        let product = tokens[1];
        let totalPrice = Number(tokens[2]) * Number(tokens[3]);

        if (!towns[town]) {
            towns[town] = {};
        }

        if (!towns[town][product]) {
            towns[town][product] = 0;
        }
        towns[town][product] += totalPrice;
    }

    for (let townName in towns) {
        console.log(`Town - ${townName}`);
        let town = towns[townName];
        for (let product in town) {
            console.log(`$$$${product} : ${town[product]}`);
        }
    }
}

printAggregatedTownIncome(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
);