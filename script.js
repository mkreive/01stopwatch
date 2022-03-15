// "use strict";

const showMinutes = document.getElementById("minutes");
const showSeconds = document.getElementById("seconds");
const showMiliseconds = document.getElementById("milisec");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let min = 00;
let sec = 00;
let milsec = 00;

let timeCounter;

startBtn.addEventListener("click", function () {
    timeCounter = setInterval(() => {
        showMinutes.textContent = min.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
        showSeconds.textContent = sec.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
        showMiliseconds.textContent = milsec.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
        sec++;
    }, 1000);
});

stopBtn.addEventListener("click", function () {
    clearInterval(timeCounter);
    timeCounter = null;
    startBtn.textContent = "resume";
});

resetBtn.addEventListener("click", function () {
    min = 00;
    sec = 00;
    milsec = 00;
    showMinutes.textContent = min.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    showSeconds.textContent = sec.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    showMiliseconds.textContent = milsec.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    console.log(sec);
});

const startTimer = function () {};
