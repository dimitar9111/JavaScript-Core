function matchAllWords(params) {
    let result = params.match(/\w+/g);
    console.log(result.join('|'));
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');