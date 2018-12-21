function printUniqueWords(params) {
    let uniqueWords = [];

    for (let i = 0; i < params.length; i++) {
        let words = params[i].toLowerCase().split(/[\s,.]/).filter(w => w !== "");

        for (let j = 0; j < words.length; j++) {
            if (!uniqueWords.includes(words[j])) {
                uniqueWords.push(words[j]);
            }
        }
    }

    console.log(uniqueWords.join(", "));
}

printUniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui. ',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. ',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. ',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. ',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu. ',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus. ',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']
);