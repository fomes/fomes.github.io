const root = document.querySelector('#root');
const form = document.querySelector('#myForm');
const qtd = document.querySelector('#qtd');
let pokemon;

const get = async (n) => {
  let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
  let data = await resp.json();
  pokemon = data;
}

const fetchList = async (n) => {

  while(document.querySelector('.card')) {
    document.querySelector('.card').remove();
  }

	for (let i = 1; i <= n; i++) {
    await get(i);

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const div = document.createElement('div');
    root.appendChild(div);
    div.classList.add('card');

    div.innerHTML =
      `<img class='card-header' src='${pokemon.sprites.front_default}'>
      <p class='card-header' id=#${pokemon.id}>#${pokemon.id.toString().padStart(3, '0')}</p>
      <p class='name'>${name}</p>
      <p class='type'>Type: ${pokemon.types[0].type.name}</p>`;
	}
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchList(qtd.value);
})