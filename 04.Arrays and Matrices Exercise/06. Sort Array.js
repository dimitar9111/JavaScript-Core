function sortArray(params) {

    console.log(params.sort((a, b) => compare(a, b)).join('\n'));

    function compare(a, b) {
        let comparator = a.length - b.length;
        if (comparator === 0) {
            if (a > b) {
                comparator = 1;
            }
            else if (a < b) {
                comparator = -1;
            }
        }

        return comparator;
    }
}

sortArray(['alpha', 'beta', 'gamma']);