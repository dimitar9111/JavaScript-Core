function processCrystals(params) {
    let targetThickness = params.shift();

    for (let i = 0; i < params.length; i++) {
        let currentThickness = params[i];

        console.log(`Processing chunk ${currentThickness} microns`)

        let counter = 0;
        while (true) {
            if (currentThickness / 4 >= targetThickness - 1) {
                while (currentThickness / 4 >= targetThickness - 1) {
                    currentThickness = cut(currentThickness);
                    counter++;
                }
                console.log(`Cut x${counter}`);

                currentThickness = transportAndWash(currentThickness);

                if (currentThickness === targetThickness) {
                    break;
                }
            }
            if (currentThickness / 5 * 4 >= targetThickness - 1) {
                counter = 0;
                while (currentThickness / 5 * 4 >= targetThickness - 1) {
                    currentThickness = lap(currentThickness);
                    counter++;
                }
                console.log(`Lap x${counter}`);

                currentThickness = transportAndWash(currentThickness);

                if (currentThickness === targetThickness) {
                    break;
                }
            }

            if (currentThickness - 20 >= targetThickness - 1) {
                counter = 0;
                while (currentThickness - 20 >= targetThickness - 1) {
                    currentThickness = grind(currentThickness);
                    counter++;
                }
                console.log(`Grind x${counter}`);

                currentThickness = transportAndWash(currentThickness);

                if (currentThickness === targetThickness) {
                    break;
                }
            }

            if (currentThickness - 2 >= targetThickness - 1) {
                counter = 0;
                while (currentThickness - 2 >= targetThickness - 1) {
                    currentThickness = etch(currentThickness);
                    counter++;
                }
                console.log(`Etch x${counter}`);

                currentThickness = transportAndWash(currentThickness);

                if (currentThickness === targetThickness) {
                    break;
                }
            }

            if (currentThickness < targetThickness) {
                currentThickness = xRay(currentThickness);
                console.log('X-ray x1')
                break;
            }
        }

        console.log(`Finished crystal ${targetThickness} microns`);
    }


    function cut(currentThickness) {
        return currentThickness / 4;
    }

    function lap(currentThickness) {
        return currentThickness / 5 * 4;
    }

    function grind(currentThickness) {
        return currentThickness - 20;
    }

    function etch(currentThickness) {
        return currentThickness - 2;
    }

    function xRay(currentThickness) {
        return currentThickness + 1;
    }

    function transportAndWash(currentThickness) {
        console.log('Transporting and washing');
        return Math.floor(currentThickness);
    }
}

processCrystals([1375, 50000]);
