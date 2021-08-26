// https://dev.to/walternascimentobarroso/creating-a-timer-with-javascript-8b7
// https://dev.to/mrahmadawais/use-instead-of-document-queryselector-all-in-javascript-without-jquery-3ef1

const $ = document.querySelector.bind(document);

let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

let restSecond = 30;

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10); // default: 10
}

function pause() {
  clearInterval(cron);
}

function reset() {
  minute = 0;
  second = 0;
  millisecond = 0;

  $('#minute').innerText = '00';
  $('#second').innerText = '00';
  $('#millisecond').innerText = '000';

  resetRest();
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }

  if (second == 54) {
    $('#song').src = 'audio/count_clock.mp3';
  }

  if (second == 60) {
    second = 0;
    minute++;

    pause();
    startRestTimer();
  }

  if (minute == 60) {
    minute = 0;
  }

  $('#minute').innerText = showTime(minute);
  $('#second').innerText = showTime(second);
  $('#millisecond').innerText = showTime(millisecond);
}

function showTime(input) {
  return input > 10 ? input : `0${input}`
}

function delay(milliseconds){
  var start = new Date().getTime();
  var end=0;
  
  while( (end-start) < milliseconds){
    end = new Date().getTime();
  }
}

// ---------------------------------------------------------------------------------------------------------

function startRestTimer() {
  restTimer();
  cron = setInterval(() => { restTimer(); }, 10); // default: 10
}

function restTimer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    restSecond--;
  }

  if (restSecond == 06) {
    $('#song').src = 'audio/count_clock.mp3';
  }

  if (restSecond == 00) {
    pause();
    reset();
    resetRest();

    start();
  }

  $('#p-second').innerText = showTime(restSecond);
  $('#p-millisecond').innerText = showTime(millisecond);
}

function resetRest() {
  restSecond = 30;
  millisecond = 0;

  $('#p-second').innerText = restSecond;
  $('#p-millisecond').innerText = millisecond+'00';
}
