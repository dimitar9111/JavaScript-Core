function sumNumbersAndVAT(input) {
    let sum = 0;

    for (let number of input) {
        sum += number;
    }

    let vat = sum * 0.2;
    let total = sum + vat;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);
}

sumNumbersAndVAT([1.2, 2.6, 3.5]);