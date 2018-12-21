function sumByTown(params) {
    let result = {};

    for (let i = 0; i < params.length; i += 2) {
        const town = params[i];
        const income = params[i + 1];

        if (result[town]) {
            result[town] += Number(income);
        } else {
            result[town] = Number(income);
        }
    }

    let jsonString = JSON.stringify(result);
    console.log(jsonString);
}

sumByTown(['Sofia', '45', 'Sofia', '30', 'Varna', '50']);