function printNumbers(args) {
    let length = Number(args[0]);

    for(let i = length; i > 0; i--){
        console.log(i);
    }
}

printNumbers('4');