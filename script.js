'use strict';
const containerEl = document.getElementById('container');
const textEl = document.getElementById('text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const breathAnimation = function () {
  textEl.innerText = 'Breath In!';
  containerEl.className = 'container grow';

  setTimeout(() => {
    textEl.innerText = 'Hold';

    setTimeout(() => {
      textEl.innerText = 'Breath out';
      containerEl.className = 'container shrink';
    }, holdTime);
  }, breathTime);
};

breathAnimation();

setInterval(breathAnimation, totalTime);
