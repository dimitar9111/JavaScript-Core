function productOfThreeNumbers(args) {
    let nums = args.map(Number);
    let negativeNumbers = 0;

    for (let num of nums){
        if (num === 0){
            return "Positive";
        }
        else if (num < 0){
            negativeNumbers++;
        }
    }

    if (negativeNumbers % 2 === 0) {
        return "Positive";
    }

    return "Negative";
}

console.log(productOfThreeNumbers(['2','3','-1']))