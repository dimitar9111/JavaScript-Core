function composeObject(params) {
    let object = {};
    for (let i = 0; i < 6; i += 2) {

        object[params[i]] = params[i + 1];
    }

    console.log(object);
}

composeObject(['name', 'Pesho', 'age', '23', 'gender', 'male']);