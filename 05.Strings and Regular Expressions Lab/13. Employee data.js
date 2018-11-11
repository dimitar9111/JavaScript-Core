function printEmployeeData(params) {
    regex = /^([A-Z][A-Za-z]*)\s-\s([1-9][0-9]*([\.,]{0,1}[0-9]*))\s-\s([A-Za-z0-9\- ]+)$/;
    for (let i = 0; i < params.length; i++) {

        let match = params[i].match(regex);
        if (match) {
            console.log(`Name: ${match[1]}\n` +
                `Position: ${match[4]}\n` +
                `Salary: ${match[2]}`);
            ;
        }

    }
}


printEmployeeData(['Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader ']
);