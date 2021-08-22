var produto = document.getElementById("produto");
var quantidade = document.getElementById("quantidade");
var preçov = document.getElementById("preço-venda");
var preçoc = document.getElementById("preço-compra");
var saldo = document.getElementById("saldo");

let numb = 0;
let valor_retirada = 0;

if(!localStorage.getItem('saldo')) {
  saldo.innerText = numb.toFixed(2);
  
} else {
  saldo.innerText = parseFloat(localStorage.getItem('saldo')).toFixed(2);
}

function verificar() {
  if (produto.value == "" && quantidade.value == 0 && preçov.value <= 0) {
    window.alert('Preencha todos os campos!');
    
  } else if (produto.value == "") {
    window.alert('Preencha o "Nome do Item"!');
    
  } else if (quantidade.value == 0) {
    window.alert('Preencha a "Quantidade"!');
    
  } else if (preçoc.value <= 0) {
    window.alert('Preencha o campo "Preço de Compra"!');

  } else if (preçov.value <= 0) {
    window.alert('Preencha o campo "Preço de Venda"!');
  };
};

function retirada() {
  let total = 0;
  valor_retirada = prompt('Digite valor para retirar: ');

  if(valor_retirada === null || valor_retirada === '') {
    return;

  } else {
    total = parseFloat(saldo.innerText) - parseFloat(valor_retirada);
    localStorage.setItem('saldo', total);
    location.reload();
  }

}

function deposito() {
  let total = 0;
  valor_deposito = prompt('Digite valor para depositar: ');

  if(valor_deposito === null || valor_deposito === '') {
    return;

  } else {
    total = parseFloat(saldo.innerText) + parseFloat(valor_deposito);
    localStorage.setItem('saldo', total);
    location.reload();
  }

}

function excluir() {
  if (confirm('Tem certeza que deseja excluir todos os produtos?')) {
    if (localStorage.length === 0) {
      window.alert('Estoque vazio!');

    } else {
      localStorage.removeItem("estoqueItens");
      window.alert('Estoque excluído!');
    };

  } else {
    return false;
  };
};

function adicionar() {

  var novo = document.getElementById("produto").value;
  var qtd = document.getElementById("quantidade").value;
  var preçov = document.getElementById("preço-venda").value;
  var preçoc = document.getElementById("preço-compra").value;

  if (!novo) {
    return false;

  } else if (!qtd) {
    return false;

  } else if (!preçov) {
    return false;

  } else if (!preçoc) {
    return false;
  };

  var item = {
    nome: novo,
    quant: qtd,
    compra: preçoc,
    venda: preçov,
  };

  if (localStorage.getItem('estoqueItens') === null) {
    var itens = [];
    itens.push(item);
    localStorage.setItem('estoqueItens', JSON.stringify(itens));

  } else {
    var itens = JSON.parse(localStorage.getItem('estoqueItens'));
    itens.push(item);
    localStorage.setItem('estoqueItens', JSON.stringify(itens));

  };

};

function saidaItem(nome) {
  var itens = JSON.parse(localStorage.getItem('estoqueItens'));
  let valor_venda = parseFloat(saldo.innerText);

  for (var i = 0; i < itens.length; i++) {
    let qtd = 0;
    if (itens[i].nome === nome) {
      qtd = prompt('Quantidade para dar saída?');

      if (qtd === null || qtd === '') {
        return;

      } else {
        itens[i].quant = parseInt(itens[i].quant) - parseInt(qtd);
      }
    };

    valor_venda += itens[i].venda*qtd;
    localStorage.setItem('saldo', parseFloat(valor_venda));
    localStorage.setItem('estoqueItens', JSON.stringify(itens));

  };

  mostrarResultado();
  location.reload();
};

function entradaItem(nome) {
  var itens = JSON.parse(localStorage.getItem('estoqueItens'));

  for (var i = 0; i < itens.length; i++) {
    if (itens[i].nome === nome) {
      let qtd = prompt('Quantidade para dar entrada?');

      if (qtd === null || qtd === '') {
        return;

      } else {
        itens[i].quant = parseInt(itens[i].quant) + parseInt(qtd);
      }
    };

    localStorage.setItem('estoqueItens', JSON.stringify(itens));

  };

  mostrarResultado();

};

function removerItem(nome) {
  var itens = JSON.parse(localStorage.getItem('estoqueItens'));

  for (var i = 0; i < itens.length; i++) {
    if (itens[i].nome === nome) {
      if(confirm('Excluir item selecionado?')){
        itens.splice(i, 1);
      }
    };

    localStorage.setItem('estoqueItens', JSON.stringify(itens));

  };

  mostrarResultado();

};

function mostrarResultado() {

  var itens = JSON.parse(localStorage.getItem('estoqueItens'));
  var resultadoItens = document.getElementById('resultados');

  resultadoItens.innerHTML = '';

  for (var i = 0; i < itens.length; i++) {
    var nome = itens[i].nome;
    var quant = itens[i].quant;
    var compra = itens[i].compra;
    var venda = itens[i].venda;

    resultadoItens.innerHTML += '\
      <tr>\
        <td style="word-wrap: break-word;">' + nome + '</td>\
        <td style="word-wrap: break-word;">' + quant + '</td>\
        <td style="word-wrap: break-word;">' + compra + '</td>\
        <td style="word-wrap: break-word;">' + venda + '</td>\
        <td><button class="btn btn-primary font-weight-bold btn-sm" onclick="entradaItem(\'' + nome + '\')">+</button></td>\
        <td><button class="btn btn-warning font-weight-bold btn-sm" onclick="saidaItem(\'' + nome + '\')">-</button></td>\
        <td><button class="btn btn-danger font-weight-bold btn-sm" onclick="removerItem(\'' + nome + '\')">x</button></td>\
      </tr>';

    produto.value = '';
    quantidade.value = '';
    preçoc.value = '';
    preçov.value = '';
    produto.focus();

  };

};

// https://github.com/todvora/localstorage-backup

var localStorageBackup = function () {
  if (confirm('Deseja fazer backup dos produtos?')) {
    var backup = {};
    for (i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      backup[key] = escape(encodeURIComponent(value));
    }
    var json = JSON.stringify(backup);
    var base = btoa(json);
    var href = 'data:text/javascript;charset=utf-8;base64,' + base;
    var link = document.createElement('a');
    link.setAttribute('download', 'backup.json');
    link.setAttribute('href', href);
    document.querySelector('body').appendChild(link);
    link.click();
    link.remove();
  }
};

var localStorageRestore = function () {
  var t = document.createElement('div');
  var a = document.createElement('a');
  a.appendChild(document.createTextNode('[ x ]'));
  a.setAttribute('href', '#');

  a.style.position = 'absolute';
  a.style.top = '10px';
  a.style.right = '10px';
  a.style['text-decoration'] = 'none';
  a.style.color = '#fff';
  t.appendChild(a);
  a.onclick = function () {
    t.remove();
  };
  t.style.width = '50%';
  t.style.position = 'absolute';
  t.style.top = '25%';
  t.style.left = '25%';
  t.style['background-color'] = 'gray';
  t.style['text-align'] = 'center';
  t.style.padding = '50px';
  t.style.color = '#fff';
  t.style['z-index'] = 10000;

  var l = document.createElement('input');
  l.setAttribute('type', 'file');
  l.setAttribute('id', 'fileinput');
  l.onchange = function (e) {
    t.remove();
    var f = e.target.files[0];
    if (f) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var text = e.target.result;
        var backup = JSON.parse(text);
        for (var key in backup) {
          var value = decodeURIComponent(unescape(backup[key]));
          window.localStorage.setItem(key, value);
        }
        // alert(Object.keys(backup).length + ' items resturados!');
        alert('Backup restaurado com sucesso!');
        location.reload();
      };
      reader.readAsText(f);
    } else {
      alert('Failed to load file');
    }
  };
  var a = document.createElement('h3');
  a.appendChild(document.createTextNode('Selecione arquivo de backup'));
  t.appendChild(a);
  t.appendChild(l);
  document.querySelector('body').appendChild(t);
};

var localStorageClear = function () {
  if (window.confirm('Do you really want to delete all ' + localStorage.length + ' localStorage items of this website?')) {
    localStorage.clear();
  }
}
