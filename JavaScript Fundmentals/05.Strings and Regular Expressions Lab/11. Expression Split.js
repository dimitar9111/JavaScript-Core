function splitJSExpression(params) {
    let result = params
        .split(/[\s;(),.]/)
        .filter(p => p !== '');

    console.log(result.join('\n'));
}

splitJSExpression('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');