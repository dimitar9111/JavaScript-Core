function figureArea(w, h, W, H) {
    let [firstArea, secondArea, commonArea] =
        [w * h, W * H, Math.min(w, W) * Math.min(h, H)];

    console.log(firstArea + secondArea - commonArea);
}


figureArea(2, 4, 5, 3);