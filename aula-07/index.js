var cartas = [
    {
        gato: "Persa",
        atributos: {
            sociavel: 95,
            carinho: 85,
            independencia: 90,
            inteligencia: 75
        }
    },
    {
        gato: "Siamês",
        atributos: {
            sociavel: 90,
            carinho: 80,
            independencia: 85,
            inteligencia: 95
        }
    },
    {
        gato: "Maine Coon",
        atributos: {
            sociavel: 80,
            carinho: 90,
            independencia: 95,
            inteligencia: 85
        }
    }
]

function sortearCarta() {

    var numeroMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroMaquina];

    var numeroJogador = parseInt(Math.random() * 3);
    while (numeroMaquina == numeroJogador) {
        var numeroJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroJogador];

    document.getElementById('tabela').style.display = "block";
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirAtributos()
    exibirCarta(cartaJogador)
}

function exibirCarta(carta) {
    var html = ""
    html += "<tr><th>Gato</th>"
    html += "<td>" + carta.gato + "</td></tr>"
    html += "<tr><th>Sociável</th>"
    html += "<td>" + carta.atributos.sociavel + "</td></tr>"
    html += "<tr><th>Carinho</th>"
    html += "<td>" + carta.atributos.carinho + "</td></tr>"
    html += "<tr><th>Independência</th>"
    html += "<td>" + carta.atributos.independencia + "</td></tr>"
    html += "<tr><th>Inteligência</th>"
    html += "<td>" + carta.atributos.inteligencia + "</td></tr>"

    var tabelaJogadores = document.getElementById('cartaJogador')
    tabelaJogadores.innerHTML = html
}

function exibirAtributos() {
    var op = document.getElementById('opcoes');
    var html = ""
    for (var atributo in cartaJogador.atributos) {
        html += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    op.innerHTML = html;
}

function opSelecionada() {
    var boxAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < boxAtributo.length; i++) {
        if (boxAtributo[i].checked) {
            return boxAtributo[i].value;
        }
    }
}

function jogar() {
    var atributoEscolhido = opSelecionada()

    if (cartaJogador.atributos[atributoEscolhido] > cartaMaquina.atributos[atributoEscolhido]) {
        document.querySelector('span').innerHTML = "Voce ganhou!! Valor da carta da máquina=" + cartaMaquina.atributos[atributoEscolhido]
    } else if (cartaJogador.atributos[atributoEscolhido] < cartaMaquina.atributos[atributoEscolhido]) {
        document.querySelector('span').innerHTML = "Voce perdeu =( Valor da carta da máquina=" + cartaMaquina.atributos[atributoEscolhido]
    } else {
        document.querySelector('span').innerHTML = "Empate =) Valor da carta da máquina=" + cartaMaquina.atributos[atributoEscolhido]
    }
}
