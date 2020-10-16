const next = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const score = document.getElementById('score');
const rgb = document.getElementById('rgb-color');
const ball = document.getElementsByClassName('ball');
const best = document.getElementById('best');

if( best.innerText < localStorage.getItem('best')) {
  best.innerText = localStorage.getItem('best');
}

let acertou = 0;
score.innerText = 0;

function randColor() {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  const color = 'rgb(' + a + ', ' + b + ', ' + c + ')';

  return color;
}

function paint() {
  acertou = 0;
  answer.innerHTML = 'Qual a cor do valor RGB?';

  for (let i=0; i<ball.length; i++) {
    ball[i].style.backgroundColor = randColor();
  }

  const a = Math.floor(Math.random() * 5);
  rgb.innerHTML = document.getElementsByClassName('ball')[a].style.backgroundColor;

  for (let i = 0; i < ball.length; i++) {
    ball[i].addEventListener('click', () => {

      if (ball[i].style.backgroundColor === rgb.innerHTML) {
        answer.innerHTML = 'Acertou! Tente mais uma...';
        if (acertou == 0) {
          score.innerText = parseInt(score.innerText) +10;

          if (score.innerText > parseInt(localStorage.getItem('best')) || !localStorage.getItem('best')) {
            localStorage.setItem('best', score.innerText);
          }
        } 
        acertou = 1;

      } else {
        setTimeout(() => { document.location.reload(); }, 1000);
        answer.innerHTML = 'Errou! Perdeu tudo...';
        score.innerText = 0;
      }
    });
  }
}

paint();
next.addEventListener('click', () => paint());
