function countWords(params) {
    let words = params[0].split(/\W/).filter(w => w !== "");

    let result = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (result[word]) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }

    let jsonString = JSON.stringify(result);
    console.log(jsonString);
}

countWords([`Far too slow, you're far too slow.`, `re`]);
