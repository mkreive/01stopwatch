// "use strict";

// Selecting elements

const showMinutes = document.getElementById("minutes");
const showSeconds = document.getElementById("seconds");
const showMiliseconds = document.getElementById("milisec");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Code

let min = 00;
let sec = 00;
let milsec = 00;

let timeoutId;

startBtn.addEventListener("click", function () {
    clearInterval(timeoutId);
    timeoutId = setInterval(() => {
        showMinutes.innerText = min.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
        showSeconds.innerText = sec.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
        showMiliseconds.innerText = milsec.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });

        milsec++;

        if (milsec > 99) {
            sec++;
            milsec = 00;

            if (sec > 59) {
                min++;
                sec = 00;
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
});
