let show = function(event) {
  let imagem = document.getElementById('meme-image');
  imagem.src = URL.createObjectURL(event.target.files[0]);
};

let main = document.getElementById('main');

function ss() {
  html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.removeChild(main);
    document.body.appendChild(canvas);
  });
}

let texto = document.getElementById("text-input");
texto.addEventListener('input', subtitle);

borda = document.getElementById("meme-image-container");

function subtitle(){
  document.getElementById("meme-text").innerHTML = texto.value;
}

function meme1() {
  let meme = document.getElementById("meme-1");
  let imagem = document.getElementById('meme-image');
  imagem.src = meme.src;
}

function meme2() {
  let meme = document.getElementById("meme-2");
  let imagem = document.getElementById('meme-image');
  imagem.src = meme.src;
}

function meme3() {
  let meme = document.getElementById("meme-3");
  let imagem = document.getElementById('meme-image');
  imagem.src = meme.src;
}

function meme4() {
  let meme = document.getElementById("meme-4");
  let imagem = document.getElementById('meme-image');
  imagem.src = meme.src;
}
