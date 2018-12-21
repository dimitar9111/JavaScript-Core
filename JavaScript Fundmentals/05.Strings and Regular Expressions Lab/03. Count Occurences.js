function countOccurrences(key, line) {
    let counter = 0;

    for (let i = 0; i < line.length; i++) {
        let currentText = line.substring(i, i + key.length);
        if (key === currentText) {
            counter++;
        }
    }

    console.log(counter);
}

countOccurrences('haha', 'hahaha')