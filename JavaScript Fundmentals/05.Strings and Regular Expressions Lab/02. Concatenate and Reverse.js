function concatenateAndReverse(params) {
    let result = '';
    for (let i = 0; i < params.length; i++) {
        let line = params[i];
        result += line;
    }

    console.log(result.split('').reverse().join(''));
}

concatenateAndReverse(['I', 'am', 'student']);