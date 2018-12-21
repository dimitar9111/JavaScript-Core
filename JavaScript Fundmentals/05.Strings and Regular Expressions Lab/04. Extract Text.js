function printParenthesesContent(input) {
    let regex = /\(([^\)]*)\)/g;

    let matches, result = [];
    while (matches = regex.exec(input)) {
        result.push(matches[1]);
    }

    console.log(result.join(', '));
}

printParenthesesContent('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');