function printUsernames(params) {
    let usernames = [];
    for (let i = 0; i < params.length; i++) {
        let tokens = params[i].split('@');
        let generatedUsername = tokens[0]
            .concat('.' + tokens[1]
                .split('.')
                .map(s => s[0])
                .join(''));

        usernames.push(generatedUsername);
    }

    console.log(usernames.join(', '));
}

printUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);