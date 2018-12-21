function storeUsernames(params) {

    let compare = function (first, second) {
        let result = first.length - second.length;
        if (result !== 0) {
            return result;
        }

        if (first > second) {
            return 1;
        } else if (first < second) {
            return -1;
        } else {
            return 0;
        }
    }

    let catalogue = new Set();

    for (let i = 0; i < params.length; i++) {
        let username = params[i];

        catalogue.add(username);
    }

    for (let username of [...catalogue].sort((a, b) => compare(a, b))) {
        console.log(username);
    }
}

storeUsernames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']
);