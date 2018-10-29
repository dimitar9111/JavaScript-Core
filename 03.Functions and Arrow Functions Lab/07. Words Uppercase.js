function toUpper() {
    let result = arguments[0]
        .toUpperCase()
        .split(/\W+/)
        .filter(w => w !== '')
        .join(', ');

    console.log(result);
}

toUpper('dsadad');