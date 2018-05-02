function multiplyOrDivide(args) {
    let firstNumber = Number(args[0]);
    let secondNumber = Number(args[1]);

    if (secondNumber >= firstNumber){
        return firstNumber * secondNumber;
    }
    else{
        return firstNumber / secondNumber;
    }
}