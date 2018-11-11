function validateEmail(params) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/;
    let result = regex.test(params);

    console.log(result? 'Valid' : 'Invalid');
}

validateEmail('valid@email.bg');
validateEmail('invalid@emai1.bg');