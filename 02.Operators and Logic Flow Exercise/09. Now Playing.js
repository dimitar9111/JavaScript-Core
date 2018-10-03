function displayTrackInfo(params) {
    let track = params[0];
    let artist = params[1];
    let duration = params[2];

    console.log(`Now Playing: ${artist} - ${track} [${duration}]`)
}

displayTrackInfo(["Number one", "Nelly", "4.09"]);