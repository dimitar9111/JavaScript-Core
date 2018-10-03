function displayTag(params) {
    let location = params[0];
    let alternativeText = params[1];

    console.log(`<img src="${location}" alt="${alternativeText}">`);
}

displayTag(["smiley.gif", "Smiley Face"]);