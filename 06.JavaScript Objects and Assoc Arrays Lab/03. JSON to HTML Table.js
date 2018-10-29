function jsonToHtml(params) {
    let sanitizeInput = str => str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&quot;')
        .replace(/'/g, '&#39;');

    let array = JSON.parse(params);
    let result = '<table>\n   <tr>';
    let firstObject = array[0];

    for (let key in firstObject) {
        result += `<th>${sanitizeInput(key)}</th>`;
    }
    result += '</tr>\n';

    for (let i = 0; i < array.length; i++) {
        result += '   <tr>';
        let object = array[i];
        for (let key in object) {
            let value = Number.isFinite(object[key]) ? object[key] : sanitizeInput(object[key]);
            result += `<td>${value}</td>`;
        }
        result += '</tr>\n';
    }
    result += '</table>';

    console.log(result);
}

jsonToHtml('[{'Name':'Pesho <div>-a','Age':20,'City':'Sofia'},{'Name':'Gosho','Age':18,'City':'Plovdiv'},{'Name':'Angel','Age':18,'City':'Veliko Tarnovo'}]');