function JsonToHtml(params) {
    let result = '<table>\n';

    for (let i = 0; i < params.length; i++) {
        result += '   <tr>\n';
        let employee = JSON.parse(params[i]);
        result += `      <td>${employee.name}</td>\n`;
        result += `      <td>${employee.position}</td>\n`;
        result += `      <td>${employee.salary}</td>\n`;
        result += '   </tr>\n';
    }

    result += '</table>';

    console.log(result);
}

JsonToHtml(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);