function get(artist, title) {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
}

const form = document.querySelector('#my-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  show();
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  document.location.reload();
});

async function show() {
  const artist = document.querySelector('#artist');
  const song = document.querySelector('#song');
  const letras = document.querySelector('#letras');

  letras.innerHTML ='<div class="spinner-grow" role="status"><span class="sr-only">Carregando... </span></div>';

  try {
    const resp = await get(artist.value, song.value);
    const data = await resp.json();

    const songs = JSON.parse(localStorage.getItem('lyrics')) || [];

    if(data.lyrics) {
      if(songs.find(e => e.artist === artist.value) && songs.find(e => e.song === song.value)) {
        letras.innerHTML = songs.filter(e => e.artist === artist.value).filter(e => e.song === song.value).map(e => e.lyric);

      } else {
        const newSong = {'artist' : artist.value, 'song': song.value, 'lyric': data.lyrics};
        songs.push(newSong);

        letras.innerHTML = songs.filter(e => e.artist === artist.value).filter(e => e.song === song.value).map(e => e.lyric);
        localStorage.setItem('lyrics', JSON.stringify(songs))
      }

    } else {
      letras.innerHTML = songs.filter(e => e.artist === artist.value).filter(e => e.song === song.value).map(e => e.lyric);

      if (letras.innerHTML === '') {
        letras.innerHTML = 'Artista ou música inválidos!\nAPI: '+data.error;
      }
    }

  } catch(err) {
      console.log(err);
    }
}
