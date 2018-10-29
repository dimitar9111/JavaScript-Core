function findLocation(params) {

    function isInside(x, y, island) {
        if (x >= island.xMin && x <= island.xMax &&
            y >= island.yMin && y <= island.yMax) {
            return true;
        }
        return false;
    }

    let tuvalu = {
        name: 'Tuvalu',
        xMin: 1,
        xMax: 3,
        yMin: 1,
        yMax: 3
    };

    let tokelau = {
        name: 'Tokelau',
        xMin: 8,
        xMax: 9,
        yMin: 0,
        yMax: 1
    };

    let samoa = {
        name: 'Samoa',
        xMin: 5,
        xMax: 7,
        yMin: 3,
        yMax: 6
    };

    let cook = {
        name: 'Cook',
        xMin: 4,
        xMax: 9,
        yMin: 7,
        yMax: 8
    };

    let tonga = {
        name: 'Tonga',
        xMin: 0,
        xMax: 2,
        yMin: 6,
        yMax: 8
    };

    let islands = [tuvalu, tokelau, samoa, cook, tonga];

    for (let i = 0; i < params.length; i += 2) {
        let x = params[i];
        let y = params[i + 1];

        let isInsideCheck = false;

        for (let island of islands) {
            if (isInside(x, y, island)) {
                console.log(island.name);
                isInsideCheck = true;
            }
        }

        if (!isInsideCheck) {
            console.log('On the bottom of the ocean');
        }
    }
}

findLocation([4, 2, 1.5, 6.5, 1, 3]);