function sumFruitJuiceBottles(params) {
    const bottleCapacity = 1000;

    let quantities = {};
    let juiceBottles = new Set();

    for (let i = 0; i < params.length; i++) {
        let tokens = params[i].split(' => ');
        let fruit = tokens[0];
        let quantity = Number(tokens[1]);

        if (!quantities[fruit]) {
            quantities[fruit] = quantity;
        } else {
            quantities[fruit] += quantity;
        }

        if (quantities[fruit] >= bottleCapacity) {
            juiceBottles.add(fruit);
        }
    }

    for (let juice of juiceBottles) {
        console.log(`${juice} => ${parseInt(quantities[juice] / bottleCapacity, 10)}`);
    }
}

sumFruitJuiceBottles(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);