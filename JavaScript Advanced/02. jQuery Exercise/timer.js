function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');

    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    let time = 0;
    let interval = null;

    $(startBtn).on('click', function () {
        if (interval === null) {
            interval = setInterval(incrementTime, 1000);
        }
    });

    function incrementTime() {
        time++;
        seconds.text(('0' + time % 60).slice(-2));
        minutes.text(('0' + Math.trunc(time / 60 % 60)).slice(-2));
        hours.text(('0' + Math.trunc(time / 3600 % 60)).slice(-2));
    }

    $(stopBtn).on('click', function () {
        if (interval !== null) {
            clearInterval(interval);
            interval = null;
        }
    });
}
