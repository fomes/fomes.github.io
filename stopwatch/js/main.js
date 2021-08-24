// https://dev.to/walternascimentobarroso/creating-a-timer-with-javascript-8b7
// https://dev.to/mrahmadawais/use-instead-of-document-queryselector-all-in-javascript-without-jquery-3ef1

const $ = document.querySelector.bind(document);

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;

  $('#hour').innerText = '00';
  $('#minute').innerText = '00';
  $('#second').innerText = '00';
  $('#millisecond').innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }

  if (second == 60) {
    second = 0;
    minute++;
  }

  if (minute == 60) {
    minute = 0;
    hour++;
  }

  $('#hour').innerText = showTime(hour);
  $('#minute').innerText = showTime(minute);
  $('#second').innerText = showTime(second);
  $('#millisecond').innerText = showTime(millisecond);
}

function showTime(input) {
  return input > 10 ? input : `0${input}`
}
