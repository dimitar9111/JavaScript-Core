function printTemplate(params) {
    let result = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" + "<quiz>\n";

    for (let i = 0; i < params.length; i += 2) {
        let question = params[i];
        let answer = params[i + 1];

        result += `  <question>\n    ${question}\n  </question>\n` +
            `  <answer>\n    ${answer}\n  </answer>\n`;
    }
    result += "</quiz>";

    console.log(result);
}

printTemplate(["Where are you?", "outside"]);