const reset = document.getElementById('reset-game');
const answer = document.getElementById('answer');
const score = document.getElementById('score');
const rgb = document.getElementById('rgb-color');
const ball = document.getElementsByClassName('ball');
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
  answer.innerHTML = 'Escolha uma cor';

  for (let i=0; i<ball.length; i++) {
    ball[i].style.backgroundColor = randColor();
  }

  const a = Math.floor(Math.random() * 5);
  rgb.innerHTML = document.getElementsByClassName('ball')[a].style.backgroundColor;

  for (let i = 0; i < ball.length; i++) {
      ball[i].addEventListener('click', function result(){
        if (ball[i].style.backgroundColor === rgb.innerHTML) {
          answer.innerHTML = 'Acertou!';
          if (acertou == 0) {
            score.innerText = Number(score.innerText) +3;
          } acertou = 1;
        } else {
          answer.innerHTML = 'Errou! Tente novamente!';
          score.innerText = Number(score.innerText) -3;
        }
      });
  }
}

reset.addEventListener('click', paint);
paint();
