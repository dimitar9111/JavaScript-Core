function calculateCompoundInterest(params) {
    let principalSum = params[0];
    let interestRateInPercent = params[1];
    let periodInMonths = params[2];
    let timeSpanInYears = params[3];

    let compoundingFrequency = 12 / periodInMonths;
    let nominalInterestRate = interestRateInPercent / 100;

    let interest = principalSum *
        (Math.pow((1 + nominalInterestRate / compoundingFrequency),
            compoundingFrequency * timeSpanInYears));

    console.log(interest.toFixed(2))
}

calculateCompoundInterest([100000, 5, 12, 25])