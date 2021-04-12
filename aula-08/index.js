var cartas = [
    {
        gato: "Persa",
        imagem: "https://i2.wp.com/zolina.com.br/wp-content/uploads/2017/03/421-e1490671709781.jpg?fit=799%2C599&ssl=1",
        atributos: {
            independencia: 90,
            carinhoso: 85,
            sociavel: 95,
            inteligencia: 75
        }
    },
    {
        gato: "Siamês",
        imagem: "https://www.petlove.com.br/images/breeds/192825/profile/original/siames-p.jpg?1532626975",
        atributos: {
            independencia: 85,
            carinhoso: 80,
            sociavel: 90,
            inteligencia: 95,
        }
    },
    {
        gato: "Maine Coon",
        imagem: "https://www.jornalbomdia.com.br/tb_noticias/18382/gato%20gigante1.jpg",
        atributos: {
            independencia: 95,
            carinhoso: 90,
            sociavel: 80,
            inteligencia: 85
        }
    },
    {
        gato: "Scottish Fold",
        imagem: "https://www.petlove.com.br/images/breeds/193054/profile/original/scottish_fold-p.jpg?1532626958",
        atributos: {
            independencia: 90,
            carinhoso: 95,
            sociavel: 75,
            inteligencia: 75
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

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibirCartaJogador(cartaJogador)
}

function exibirCartaJogador(carta) {
    var divCarta = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCarta.style.backgroundImage = `url(${carta.imagem})`
    var nome = ` <p class="carta-subtitle">${carta.gato}</p>`
    var html = ""

    for (var atributo in carta.atributos) {
        html += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + carta.atributos[atributo] + "<br>"
    }

    var htmlAtributos = "<div id='opcoes' class='carta-status'>"

    divCarta.innerHTML = moldura + nome + htmlAtributos + html + '</div>'
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
        document.querySelector('#resultado').innerHTML = "Você ganhou!!"
    } else if (cartaJogador.atributos[atributoEscolhido] < cartaMaquina.atributos[atributoEscolhido]) {
        document.querySelector('#resultado').innerHTML = "Você perdeu =("
    } else {
        document.querySelector('#resultado').innerHTML = "Empate =) "
    }
    exibirCartaMaquina(cartaMaquina)
}

function exibirCartaMaquina(cartaM) {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaM.imagem})`
    var nome = ` <p class="carta-subtitle">Carta da Máquina - ${cartaM.gato}</p>`
    var html = ""

    for (var atributo in cartaM.atributos) {
        html += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaM.atributos[atributo] + "<br>"
    }

    var htmlAtributos = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + htmlAtributos + html + '</div>'
}

