const $ = document.querySelector.bind(document);

const subtitle = $('#subtitle');
const description = $('#description');
const checkbox = $('input[type="checkbox"]');
const contact = $('.contact');
const projects = $('.projects');
const brazil = $('.brazil');
let opt = 0;

const data = [
  {
    sub: 'Desenvolvedor Full Stack',
    cont: 'CONTATO',
    proj: 'PROJETOS',
    desc: 'Olá Mundo 👋. Meu nome é Felipe, desenvolvedor Full Stack em formação. Atualmente estudando Node.js. Experiência com Javascript, React, MongoDB, Bootstrap, Materialize entre outras. Eu gosto de resolver problemas e ajudar a melhorar a vida das pessoas de alguma forma! 😁 Atualmente meu maior passatempo é <i>codar</i> e aprender novas tecnologias de desenvolvimento. 🙃'
  },

  {
    sub: 'Full Stack Developer',
    cont: 'CONTACT',
    proj: 'PROJECTS',
    desc: "Hello World 👋. My name is Felipe, Full Stack developer in training. Currently studying Node.js. Experience with Javascript, React, MongoDB, Bootstrap, Materialize among others. I like to solve problems and help improve people's lives in some way! 😁 Currently my biggest hobby is <i>coding </i> and learning new development technologies. 🙃"
  }
];

subtitle.textContent = data[0].sub;
description.innerHTML = data[0].desc;
contact.textContent = data[0].cont;
projects.textContent = data[0].proj;

checkbox.addEventListener('change', function(e) { 
  if (checkbox.checked) {
    opt = 1;
  } else {
    opt = 0;
  }
  
  subtitle.textContent = data[opt].sub;
  description.innerHTML = data[opt].desc;
  contact.textContent = data[opt].cont;
projects.textContent = data[opt].proj;
});


function goToProjects() {
  window.location.href = "https://fomes.github.io/projects.html";
  // window.location.href = "http://localhost:5500/projects.html";
}

function goToHome() {
  window.location.href= "https://fomes.github.io/";
  // window.location.href = "http://localhost:5500/index.html";
}
