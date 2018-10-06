function rotateArray(params) {
    let totalCount = params.pop();
    let rotationCount = totalCount % params.length;

    for (let i = 0; i < rotationCount; i++) {
        let lastElement = params.pop();
        params.unshift(lastElement);
    }

    console.log(params.join(" "));
}

rotateArray([1, 2, 3, 4, 2]);