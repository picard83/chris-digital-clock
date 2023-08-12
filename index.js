"use strict";

const clockContainer = document.querySelector(".clock-container");
const clockChildren = document.querySelector(".clock-container-children");
const hours = document.querySelector(".hours");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");
const pm = document.querySelector(".pm");
const today = document.querySelector(".date");
// console.log(clockChildren);
console.log(sec);

//setting times//

function currentTime() {
  const date = new Date();
  const hr = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  today.innerHTML = date;

  // const seconds = date.getSeconds();

  hours.innerHTML = hr % 12;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;

  if (hours.innerHTML >= 12) {
    pm.innerHTML = "AM";
  } else {
    pm.innerHTML = "PM";
  }

  if (minutes < 10) {
    minutes.innerHTML = "0" + minutes;
  }
}

setInterval(currentTime, 1000);
///////////////////////
