function findAndReplace(username, email, phoneNumber, params){
    let placeHolders = {
        username: /<![A-Za-z]*!>/,
        email: /<@[A-Za-z]*@>/,
        phoneNumber: /<\+[A-Za-z]*\+>/
    };

    for (let i = 0; i < params.length; i++) {
        console.log(params[i]
            .replace(placeHolders.username, username)
            .replace(placeHolders.email, email)
            .replace(placeHolders.phoneNumber, phoneNumber));

    }
}

findAndReplace('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);