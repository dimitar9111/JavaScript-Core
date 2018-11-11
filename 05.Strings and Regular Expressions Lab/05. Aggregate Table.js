function storeCitiesAndIncome(params) {
    let sum = 0;
    let cities = [];

    for (let i = 0; i < params.length; i++) {
        let tokens = params[i].split('|').filter(t => t !== '');
        let city = tokens[0].trim();
        let income = Number(tokens[1]);
        cities.push(city);
        sum += income;
    }

    console.log(cities.join(', '));
    console.log(sum);
}

storeCitiesAndIncome(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);