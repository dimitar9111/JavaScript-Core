function populationInTowns(params) {
    let towns = {};

    for (let i = 0; i < params.length; i++) {
        let tokens = params[i].split(" <-> ");
        let townName = tokens[0];
        let population = Number(tokens[1]);

        if (towns[townName]) {
            towns[townName] += population;
        } else {
            towns[townName] = population;
        }
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

populationInTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);