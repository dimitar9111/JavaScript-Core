function printCensored(text, bannedWords) {
    for (let i = 0; i < bannedWords.length; i++) {
        let indexOfWord = text.indexOf(bannedWords[i]);
        while (indexOfWord >= 0) {
            text = text.replace(bannedWords[i], '-'.repeat(bannedWords[i].length));
            indexOfWord = text.indexOf(bannedWords[i]);
        }
    }

    console.log(text);
}

printCensored('roses are red, violets are blue', [', violets are', 'red']);