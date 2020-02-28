function loader(){
    document.body.style.backgroundColor = localStorage.getItem('bg');
    let teste = document.getElementById("texto");
    teste.style.fontFamily = localStorage.getItem('fonte');
}

caixa1 = document.getElementById("caixa1");
caixa1.addEventListener('keyup', paintbg);

caixa2 = document.getElementById("caixa2");
caixa2.addEventListener('keyup', fonte);

function paintbg(){
    localStorage.setItem('bg', caixa1.value);
    document.body.style.backgroundColor = localStorage.getItem('bg');
}

function fonte(){
    localStorage.setItem('fonte', caixa2.value);
    document.getElementById("texto").style.fontFamily = localStorage.getItem('fonte');
}
