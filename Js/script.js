const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newyears = Number(docment.getElementById("dt").value);

function countdown() {
    const newyearsDate = new Date(newyears);
    const currentDate = new DataTransfer();

    const totalSeconds = (newyearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const mins = Math.floor(totalSeconds / 60 % 60);
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formattime(hours);
    minsEl.innerHTML = formattime(mins);
    secondsEl.innerHTML = formattime(seconds);

    function formattime(time) {

        return time < 10 ? `0${time}` : time;
    }

}

countdown();

setInterval(countdown, 1000);
