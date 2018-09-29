function getLastmonthDays(params) {
    let month = params[1];
    let year = params[2];

    let date = new Date(`${month} ${1} ${year}`);
    date.setDate(date.getDate() - 1);

    console.log(date.getDate())
}