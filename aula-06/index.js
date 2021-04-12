var arrayJogadores = [
    {
        name: "Maria",
        vitorias: 5,
        derrotas: 3,
        pontos: 0
    },
    {
        name: "Rafa",
        vitorias: 2,
        derrotas: 1,
        pontos: 0
    }
]

exibirJogadores(arrayJogadores);

function exibirJogadores(array) {
    var html = "";
    for (var i = 0; i < array.length; i++) {
        html += "<tr><td>" + array[i].name + "</td>"
        html += "<td>" + array[i].vitorias + "</td>"
        html += "<td>" + array[i].derrotas + "</td>"
        html += "<td>" + (array[i].vitorias * 3) + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")' class='modificar'>Vitória</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")' class='modificar'>Derrotas</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

const adicionarJ = document.querySelector('#adicionarJ');
adicionarJ.onclick = addJogadores;

function addJogadores() {
    var nome = document.querySelector('#nome').value;
    var numVitorias = Number(document.querySelector('#vitorias').value)
    var numDerrotas = Number(document.querySelector('#derrotas').value)

    arrayJogadores.push({
        name: nome,
        vitorias: numVitorias,
        derrotas: numDerrotas,
        pontos: 0
    });
    exibirJogadores(arrayJogadores);
    document.getElementById('id01').style.display = 'none';
    document.getElementById('nome').value = "";
    document.getElementById('vitorias').value = "";
    document.getElementById('derrotas').value = "";
}

function adicionarVitoria(i) {
    var jogador = arrayJogadores[i];
    jogador.vitorias++;
    exibirJogadores(arrayJogadores);
}

function adicionarDerrota(i) {
    var jogador = arrayJogadores[i];
    jogador.derrotas++;
    exibirJogadores(arrayJogadores);
}
