function printCalendar(params) {
    let day = params[0];
    let month = params[1];
    let year = params[2];

    let firstDayOfCurrentMonth = new Date(year, month - 1, 1).getDay();
    let lastDayOfThePreviousMonth = new Date(year, month - 1, 0).getDate();

    let result = '<table>\r\n  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\r\n  <tr>';

    //Print previous month
    let startingDayOfPreviousMonth = lastDayOfThePreviousMonth - firstDayOfCurrentMonth + 1;
    for (let i = startingDayOfPreviousMonth; i <= lastDayOfThePreviousMonth; i++) {
        result += `<td class="prev-month">${i}</td>`;
    }

    //Finish first row
    let currentDay = 1;
    for (let i = firstDayOfCurrentMonth; i <= 6; i++) {
        if (currentDay == day) {
            result += `<td class="today">${currentDay++}</td>`;
        } else {
            result += `<td>${currentDay++}</td>`;
        }
    }

    //Print current month
    let currentMonthsLastDay = new Date(year, month, 0).getDate();
    let rowElementsCount = 0;
    while (currentDay <= currentMonthsLastDay) {
        if (rowElementsCount++ % 7 === 0) {
            result += '</tr>\r\n  <tr>'
        }

        if (currentDay === day) {
            result += `<td class="today">${currentDay++}</td>`;
        } else {
            result += `<td>${currentDay++}</td>`;
        }
    }

    //Print Next month
    currentDay = 1;
    while (rowElementsCount++ % 7 !== 0) {
        result += `<td class="next-month">${currentDay++}</td>`;
    }

    result += '</tr>\r\n</table>';
    console.log(result);
}
