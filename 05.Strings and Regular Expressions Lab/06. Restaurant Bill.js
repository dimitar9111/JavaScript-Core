function sumTheBill(params) {
    let bill = 0;
    let products = [];

    for (let i = 0; i < params.length; i += 2) {
        let product = params[i];
        let price = Number(params[i + 1]);

        products.push(product);
        bill += price;
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${bill}`);
}

sumTheBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);