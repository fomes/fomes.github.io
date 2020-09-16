let ms = 0, s = 0, m = 0;
let timer;

let display = document.querySelector('.display');

function start() {
  if(!timer) {
    timer = setInterval(run, 10);
  }
}

function pause() {
  clearInterval(timer);
  timer = false;
}

function reset() {
  clearInterval(timer);
  timer = false;
  m = 0; s = 0; ms = 0;
  display.textContent = (m<10? '0'+m : m)+':'+(s<10? '0'+s : s)+':'+(ms<10? '0'+ms : ms);
 }

function run() {
  display.textContent = (m<10? '0'+m : m)+':'+(s<10? '0'+s : s)+':'+(ms<10? '0'+ms : ms);
  ms++;
  
  if(ms == 100) {
    ms = 0;
    s++;
  }
  if(s == 60) {
    s = 0;
    m++;
  }
}
