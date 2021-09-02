// https://www.youtube.com/watch?v=h0sNAXE1ozo

const $ = document.querySelector.bind(document);

const artist = $('#artist');
const song = $('#song');
const lyric = $('#lyric');
const form = $('#my-form');

function getLyrics(artist, title) {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  showLyrics();
});

const clear = $('#clear');

clear.addEventListener('click', () => {
  document.location.reload();
});

async function showLyrics() {
  lyric.innerHTML = '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>';

  try {
    const resp = await getLyrics(artist.value, song.value);
    const data = await resp.json();

    const songs = JSON.parse(localStorage.getItem('lyrics')) || [];

    if(data.lyrics) {
      if(songs.find(e => e.artist === artist.value) && songs.find(e => e.song === song.value)) {
        lyric.innerHTML = songs.filter(e => e.artist === artist.value).filter(e => e.song === song.value).map(e => e.lyric);

      } else {
        const newSong = {'artist' : artist.value, 'song': song.value, 'lyric': data.lyrics};
        songs.push(newSong);

        lyric.innerHTML = songs.filter(e => e.artist === artist.value).filter(e => e.song === song.value).map(e => e.lyric);
        localStorage.setItem('lyrics', JSON.stringify(songs))
      }
    }

    } catch(err) {
      lyric.innerHTML = `API indisponível ou dados inválidos!\n\n${err}\nSee console for more details`;
    }
}
