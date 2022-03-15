"use strict";

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milisec = document.getElementById("milisec");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

start.addEventListener("click", function (e) {
    console.log("clicked start");
});

stop.addEventListener("click", function (e) {
    console.log("clicked");
});

reset.addEventListener("click", function (e) {
    console.log("clicked");
});
