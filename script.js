"use strict";

// Selecting elements

const showMinutes = document.getElementById("minutes");
const showSeconds = document.getElementById("seconds");
const showMiliseconds = document.getElementById("milisec");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Code

let min = 0;
let sec = 0;
let milsec = 0;

let timeoutId;

const formatTime = function (time) {
    return time.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
};

const showTime = function () {
    showMinutes.innerText = formatTime(min);
    showSeconds.innerText = formatTime(sec);
    showMiliseconds.innerText = formatTime(milsec);
};

startBtn.addEventListener("click", function () {
    clearInterval(timeoutId);
    timeoutId = setInterval(() => {
        showTime();
        milsec++;

        if (milsec > 99) {
            sec++;
            milsec = 0;

            if (sec > 59) {
                min++;
                sec = 0;
            }
        }
    }, 10);
});

stopBtn.addEventListener("click", function () {
    clearInterval(timeoutId);
    timeoutId = null;
    startBtn.textContent = "resume";
});

resetBtn.addEventListener("click", function () {
    clearInterval(timeoutId);
    startBtn.textContent = "start";
    min = 0;
    sec = 0;
    milsec = 0;
    showTime();
});
