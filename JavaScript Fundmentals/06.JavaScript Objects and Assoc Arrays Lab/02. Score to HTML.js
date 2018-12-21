function scoreToHTML(params) {
    let escapeOutput = string => string
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&quot;')
        .replace(/'/g, '&#39;');

    let objects = JSON.parse(params);

    let result = '<table>\n  <tr><th>name</th><th>score</th></tr>\n';
    for (let object of objects) {
        result += `  <tr><td>${escapeOutput(object.name)}</td><td>${Number(object.score)}</td></tr>\n`;
    }
    result += '</table>';

    console.log(result);
}

scoreToHTML("[{'name':'Pesho','score':479},{'name':'Gosho','score':205}]");