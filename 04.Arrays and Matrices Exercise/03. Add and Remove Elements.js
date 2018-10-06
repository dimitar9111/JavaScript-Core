function addRemoveElements(params) {
    let value = 1;
    let result = [];

    for (let i = 0; i < params.length; i++) {
        switch (params[i]) {
            case "add":
                result.push(value);
                break;
            case "remove":
                result.pop();
                break;
        }

        value++;
    }

    let output = result.length === 0 ? "Empty" : result.join("\n");
    console.log(output);
}

addRemoveElements(["add", "add", "remove", "add", "add"])