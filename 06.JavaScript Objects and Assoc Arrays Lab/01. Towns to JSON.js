function townsToJSON(params) {
    let [townKey, latitudeKey, longitudeKey] = params.shift().split(/\s*\|\s*/).filter(p => p !== "");
    let result = [];

    for (let i = 0; i < params.length; i++) {
        let [town, latitude, longitude] = params[i].split(/\s*\|\s*/).filter(p => p !== "");

        let object = {};
        object[townKey] = town;
        object[latitudeKey] = Number(latitude);
        object[longitudeKey] = Number(longitude);
        result.push(object);
    }

    let jsonResult = JSON.stringify(result);

    console.log(jsonResult);
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);