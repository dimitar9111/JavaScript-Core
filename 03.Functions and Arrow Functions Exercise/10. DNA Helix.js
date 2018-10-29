function printDNA(n) {
    let symbols = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let starElementsCount = 1;
    let rowElementsCount = 6;
    let starsCountChanger = false;
    let star = '*';
    let dash = '-';

    for (let i = 0; i < n; i++) {
        let firstLetter = symbols.shift();
        let secondLetter = symbols.shift();

        if (starsCountChanger) {
            starElementsCount--;
        }
        else {
            starElementsCount++;
        }

        console.log(
            `${star.repeat(starElementsCount)}` +
            `${firstLetter}` +
            `${dash.repeat(rowElementsCount - 2 - starElementsCount * 2)}` +
            `${secondLetter}` +
            `${star.repeat(starElementsCount)}`
        );

        if (starElementsCount === 2) {
            starsCountChanger = true;
        } else if (starElementsCount === 0) {
            starsCountChanger = false;
        }

        symbols.push(firstLetter);
        symbols.push(secondLetter);
    }
}

printDNA(4);