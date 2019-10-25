(function ($) {
"use strict";
  
  // time tricker js
  
  $(document).ready(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  let countDown = new Date('Aug 10, 2019 16:00:00').getTime(),
      x = setInterval(function(){
  
      let now = new Date().getTime(),
      distance = countDown - now;
  
      document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
  },)
  
  });
  $(document).ready(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  let countDown = new Date('Sep 15, 2019 00:00:00').getTime(),
      x = setInterval(function() {
  
      let now = new Date().getTime(),
      distance = countDown - now;
  
      document.getElementById('days1').innerText = Math.floor(distance / (day)),
      document.getElementById('hours1').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes1').innerText = Math.floor((distance % (hour)) / (minute));
  },)
  
  });
  $(document).ready(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  let countDown = new Date('Apr 25, 2019 00:00:00').getTime(),
      x = setInterval(function() {
  
      let now = new Date().getTime(),
      distance = countDown - now;
  
      document.getElementById('days2').innerText = Math.floor(distance / (day)),
      document.getElementById('hours2').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes2').innerText = Math.floor((distance % (hour)) / (minute));
  },)
  
  });
  $(document).ready(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
  let countDown = new Date('Dec 25, 2018 00:00:00').getTime(),
      x = setInterval(function() {
  
      let now = new Date().getTime(),
      distance = countDown - now;
  
      document.getElementById('days3').innerText = Math.floor(distance / (day)),
      document.getElementById('hours3').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes3').innerText = Math.floor((distance % (hour)) / (minute));
  },)
  
  });
  
  
  }(jQuery));