function getRoots(a, b, c) {
    let discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        console.log("No");
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        console.log(root)
    } else {
        let firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
        let secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);

        if (firstRoot <= secondRoot) {
            console.log(firstRoot);
            console.log(secondRoot);
        } else {
            console.log(secondRoot);
            console.log(firstRoot);
        }
    }
}

getRoots(6, 11, -35);