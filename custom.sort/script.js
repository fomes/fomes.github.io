const $ = document.querySelector.bind(document);

const t1_player1 = $('.t1j1');
const t1_player2 = $('.t1j2');
const t1_player3 = $('.t1j3');
const t1_player4 = $('.t1j4');
const t1_player5 = $('.t1j5');

const t2_player1 = $('.t2j1');
const t2_player2 = $('.t2j2');
const t2_player3 = $('.t2j3');
const t2_player4 = $('.t2j4');
const t2_player5 = $('.t2j5');

const tagPlayers = $('.players');
const newPlayer = $('#newPlayer');

let shuffledArray = [];

const arrayPlayers = [
  'z0xy',
  'Luzek',
  'Wickd',
  'Fomes',
  'Suvino',
  'VMaax',
  'PaiDe3',
  'FizzGuei',
  'HeySarah',
  'RazeNation',
];

function showPlayers() {
  tagPlayers.innerHTML = arrayPlayers.map((e, index) => `<li>${e} <i onclick="removePlayer(${index})" class="fa fa-trash"></i></li>`).join('');
}

showPlayers();

function teamSort() {
  shuffledArray = arrayPlayers.sort(() => 0.5 - Math.random());

  if (shuffledArray.length < 10) {
    alert('Coloque 10 jogadores para sortear!');
  }

  else {
    t1_player1.innerText = shuffledArray[0];
    t1_player2.innerText = shuffledArray[1];
    t1_player3.innerText = shuffledArray[2];
    t1_player4.innerText = shuffledArray[3];
    t1_player5.innerText = shuffledArray[4];
    
    t2_player1.innerText = shuffledArray[5];
    t2_player2.innerText = shuffledArray[6];
    t2_player3.innerText = shuffledArray[7];
    t2_player4.innerText = shuffledArray[8];
    t2_player5.innerText = shuffledArray[9];
  }

}

function addPlayer() {
  if (arrayPlayers.length < 10) {
    if (newPlayer.value.length === 0) {
      alert('Digite um nome!');
    } else {
      arrayPlayers.push(newPlayer.value);
      showPlayers();
    }
  } else {
    alert('Máx: 10 jogadores!');
  }
}

function removePlayer(index) {
  arrayPlayers.splice(index, 1);
  showPlayers();
}

function change(index) {
  let tempPlayer = '';

  if (index === 0) {
    tempPlayer = t1_player1.innerText;
    t1_player1.innerText = t2_player1.innerText;
    t2_player1.innerText = tempPlayer;
  }

  if (index === 1) {
    tempPlayer = t1_player2.innerText;
    t1_player2.innerText = t2_player2.innerText;
    t2_player2.innerText = tempPlayer;
  }

  if (index === 2) {
    tempPlayer = t1_player3.innerText;
    t1_player3.innerText = t2_player3.innerText;
    t2_player3.innerText = tempPlayer;
  }

  if (index === 3) {
    tempPlayer = t1_player4.innerText;
    t1_player4.innerText = t2_player4.innerText;
    t2_player4.innerText = tempPlayer;
  }

  if (index === 4) {
    tempPlayer = t1_player5.innerText;
    t1_player5.innerText = t2_player5.innerText;
    t2_player5.innerText = tempPlayer;
  }
}

//@media query

if (window.matchMedia("(max-width: 600px)").matches) {
  $(".players-div").classList.add("pull-s1");
  $(".team1").classList.add("push-s1");

  $(".changeButtons").classList.remove("pull-s2");

  $(".team2").classList.remove("pull-s4");
  $(".team2").classList.add("pull-s1");
}
