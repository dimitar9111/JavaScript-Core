function getBiggestNumber(params) {
    let firstNum = params[0];
    let secondNum = params[1];
    let thirdNum = params[2];

    console.log(Math.max(firstNum, secondNum, thirdNum));
}

getBiggestNumber([3, 5, -234]);