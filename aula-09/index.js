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
    },
    {
        gato: "Ragdoll",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_960839-MLB43595295104_092020-W.jpg",
        atributos: {
            independencia: 75,
            carinhoso: 100,
            sociavel: 80,
            inteligencia: 85
        }
    },
    {
        gato: "Angorá",
        imagem: "https://www.petz.com.br/gato/racas/angora/img/gatodestaque.webp",
        atributos: {
            independencia: 75,
            carinhoso: 95,
            sociavel: 70,
            inteligencia: 85
        }
    },
    {
        gato: "Burmese",
        imagem: "https://www.collinsdictionary.com/images/full/burmesecat_90935267.jpg",
        atributos: {
            independencia: 85,
            carinhoso: 90,
            sociavel: 85,
            inteligencia: 80
        }
    },
    {
        gato: "Sphynx",
        imagem: "https://www.racoesreis.com.br/wordpress/wp-content/uploads/imagem_do_post-7.jpg",
        atributos: {
            independencia: 90,
            carinhoso: 90,
            sociavel: 95,
            inteligencia: 95
        }
    }
]

var pontoJogador = 0;
var pontoMaquina = 0;

var baralhoJogador = []
var baralhoMaquina = []
dividirCartas()

function dividirCartas() {
    var indexMaquina = 0;
    var indexJogador = 0;

    for (var i = 0; i < cartas.length; i++) {
        if (i % 2 == 0) {
            baralhoJogador[indexJogador] = cartas[i]
            indexJogador++;
        } else {
            baralhoMaquina[indexMaquina] = cartas[i]
            indexMaquina++;
        }
    }
    atualizaCartasPorJogador()
}

function atualizaCartasPorJogador() {
    var divCartasPJogador = document.getElementById('placarCadaJogador')

    var html = "Jogador: " + baralhoJogador.length + " cartas restantes - Máquina: " + baralhoMaquina.length + " cartas restantes";
    divCartasPJogador.innerHTML = html
}

function atualizarQntBaralho(baralhoCampeao, baralhoPerdedor, cartaPerdedora) {
    baralhoCampeao.push(cartaPerdedora)

    var retirar = baralhoPerdedor.indexOf(cartaPerdedora)
    baralhoPerdedor.splice(retirar, 1)
    atualizaCartasPorJogador()
}

atualizarPlacar()

function atualizarPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "PLACAR: Jogador " + pontoJogador + "/" + pontoMaquina + " Máquina"
    divPlacar.innerHTML = html;
}

function sortearCarta() {

    var numeroMaquina = parseInt(Math.random() * baralhoMaquina.length);
    cartaMaquina = baralhoMaquina[numeroMaquina];

    var numeroJogador = parseInt(Math.random() * baralhoJogador.length);
    cartaJogador = baralhoJogador[numeroJogador];

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
        document.querySelector('#resultado').innerHTML = "Voce ganhou!!";
        pontoJogador++;
        atualizarQntBaralho(baralhoJogador, baralhoMaquina, cartaMaquina)
    } else if (cartaJogador.atributos[atributoEscolhido] < cartaMaquina.atributos[atributoEscolhido]) {
        document.querySelector('#resultado').innerHTML = "Voce perdeu =(";
        pontoMaquina++;
        atualizarQntBaralho(baralhoMaquina, baralhoJogador, cartaJogador)
    } else {
        document.querySelector('#resultado').innerHTML = "Empate =) "
    }

    if (baralhoMaquina.length == 0 || baralhoJogador.length == 0) {
        alert("Fim do jogo")
        if (pontoJogador > pontoMaquina) {
            document.querySelector('#resultado').innerHTML = "Ganhou!!";
        } else if (pontoMaquina > pontoMaquina) {
            document.querySelector('#resultado').innerHTML = "Perdeu :(";
        } else {
            document.querySelector('#resultado').innerHTML = "Empatou"
        }
    }
    else {
        document.getElementById('btnProximaRodada').disabled = false
    }


    document.getElementById('btnJogar').disabled = true
    atualizarPlacar()
    exibirCartaMaquina()
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = ` <p class="carta-subtitle">Carta da Máquina - ${cartaMaquina.gato}</p>`
    var html = ""

    for (var atributo in cartaMaquina.atributos) {
        html += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var htmlAtributos = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + htmlAtributos + html + '</div>'
}
function proximaRodada() {
    var divCartas = document.getElementById('cartas')
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    var resposta = document.getElementById('resultado')
    resposta.innerHTML = " "

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
}