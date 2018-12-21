function printMatchedDates(params) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;

    for (let i = 0; i < params.length; i++) {
        let match = regex.exec(params[i]);

        while (match) {
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
            match = regex.exec(params[i]);
        }

    }
}

printMatchedDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']
);