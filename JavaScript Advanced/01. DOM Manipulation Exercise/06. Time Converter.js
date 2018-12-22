function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', calculateByDays);
    hoursBtn.addEventListener('click', calculateByHours);
    minutesBtn.addEventListener('click', calculateByMinutes);
    secondsBtn.addEventListener('click', calculateBySeconds);

    function calculateByDays() {
        let days = Number(document.getElementById('days').value);
        document.getElementById('hours').value = days * 24;
        document.getElementById('minutes').value = days * 24 * 60;
        document.getElementById('seconds').value = days * 24 * 60 * 60;
    };

    function calculateByHours() {
        let hours = Number(document.getElementById('hours').value);
        document.getElementById('days').value = hours / 24;
        document.getElementById('minutes').value = hours * 60;
        document.getElementById('seconds').value = hours * 60 * 60;
    };

    function calculateByMinutes() {
        let minutes = Number(document.getElementById('minutes').value);
        document.getElementById('days').value = minutes / 60 / 24;
        document.getElementById('hours').value = minutes / 60;
        document.getElementById('seconds').value = minutes * 60;
    };

    function calculateBySeconds() {
        let seconds = Number(document.getElementById('seconds').value);
        document.getElementById('days').value = seconds / 60 / 60 / 24;
        document.getElementById('hours').value = seconds / 60 / 60;
        document.getElementById('minutes').value = seconds / 60;
    };
}
