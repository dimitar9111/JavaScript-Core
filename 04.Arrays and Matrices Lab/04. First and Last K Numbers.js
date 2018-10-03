function getFirstAndLastKNumbers(params) {
    let count = params.shift();
    console.log(params.slice(0, count).join(" "));
    console.log(params.slice(params.length - count).join(" "));
}

getFirstAndLastKNumbers([2, 7, 8, 9]);