let mostraFoto = function(event) {
    let imagem = document.getElementById('meme-image');
    imagem.src = URL.createObjectURL(event.target.files[0]);
  };

let texto = document.getElementById("text-input");
texto.addEventListener('input', exibir);

let botao1 = document.getElementById("button1");
botao1.addEventListener('click', borda1);

let botao2 = document.getElementById("button2");
botao2.addEventListener('click', borda2);

let botao3 = document.getElementById("button3");
botao3.addEventListener('click', borda3);

borda = document.getElementById("meme-image-container");

function exibir(){
    document.getElementById("meme-text").innerHTML = texto.value;
}

function mostraMeme1() {
    let meme = document.getElementById("meme-1");
    let imagem = document.getElementById('meme-image');
    imagem.src = meme.src;
}

function mostraMeme2() {
    let meme = document.getElementById("meme-2");
    let imagem = document.getElementById('meme-image');
    imagem.src = meme.src;
}

function mostraMeme3() {
    let meme = document.getElementById("meme-3");
    let imagem = document.getElementById('meme-image');
    imagem.src = meme.src;
}

function mostraMeme4() {
    let meme = document.getElementById("meme-4");
    let imagem = document.getElementById('meme-image');
    imagem.src = meme.src;
}


function borda1(){
    borda.style.borderColor = "red";
    borda.style.borderStyle = "dashed";
    borda.style.borderWidth = "3px";
}

function borda2(){
    borda.style.borderColor = "blue";
    borda.style.borderStyle = "double";
    borda.style.borderWidth = "5px";
}

function borda3(){
    borda.style.borderColor = "green";
    borda.style.borderStyle = "groove";
    borda.style.borderWidth = "6px";
}
