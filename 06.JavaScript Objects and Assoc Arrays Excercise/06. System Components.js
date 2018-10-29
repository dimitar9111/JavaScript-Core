function storeSystemComponents(params) {
    let systems = new Map();

    let compareByTwo = function (first, second) {
        let result = second[1].size - first[1].size;
        if (result !== 0) {
            return result;
        }

        if (first[0].toUpperCase() > second[0].toUpperCase()) {
            return 1;
        } else if (first[0].toUpperCase() < second[0].toUpperCase()) {
            return -1;
        } else {
            return 0;
        }
    }

    let compare = function (first, second) {
        return second[1].length - first[1].length;
    }


    for (let i = 0; i < params.length; i++) {
        let tokens = params[i].split(' | ');
        let system = tokens[0];
        let component = tokens[1];
        let subComponent = tokens[2];

        if (!systems.get(system)) {
            systems.set(system, new Map());
        }

        if (!systems.get(system).get(component)) {
            systems.get(system).set(component, []);
        }

        systems.get(system).get(component).push(subComponent);
    }

    for (let system of [...systems.entries()].sort((a, b) => compareByTwo(a, b))) {
        console.log(system[0]);
        for (let component of [...system[1].entries()].sort((a, b) => compare(a, b))) {
            console.log(`|||${component[0]}`)
            for (let subComponent of component[1]) {
                console.log(`||||||${subComponent}`)
            }
        }
    }
}

storeSystemComponents(
    ['SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security']
);