function countWords(params) {
    let words = params[0].toLowerCase().split(/\W/).filter(w => w !== "");

    let result = new Map();

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (result.get(word)) {
            result.set(word, result.get(word) + 1);
        } else {
            result.set(word, 1);
        }
    }

    let sortedResult = new Map([...result.entries()].sort());

    for (let position of sortedResult) {
        console.log(`'${position[0]}' -> ${position[1]} times`);
    }
}

countWords([`Far too slow, you're far too slow.`, `re`]);