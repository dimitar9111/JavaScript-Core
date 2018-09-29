function convertInches(value) {
    let feet = Math.floor(value / 12);
    let inches = value % 12;

    console.log(`${feet}'-${inches}"`)
}

convertInches(36);