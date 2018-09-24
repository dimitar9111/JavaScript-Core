function calculateArea(a, b, c){
    let halfSum = (a + b + c) / 2;
    let area = Math.sqrt(halfSum *(halfSum - a) * (halfSum - b) * (halfSum - c));
    console.log(area);
}