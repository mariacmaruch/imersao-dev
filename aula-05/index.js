var arrayFilmes = [
    {
        name: "parasita",
        imagem: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg", trailer: "m4jfE-TxC24"
    },
    {
        "name": "matrix",
        "imagem": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: "m8e-FF8MsqU"
    },
    {
        "name": "bacurau",
        "imagem": "https://m.media-amazon.com/images/M/MV5BYjc1N2M1YjMtYzBiNi00NGFiLThkN2QtY2EwZGU5MDRkODAzXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: "qlheaoLnewE"
    },
    {
        "name": "fragmentado",
        "imagem": "https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: "7l4SzfMstLE"
    },
    {
        "name": "star Wars",
        "imagem": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: "vZ734NWnAHA"
    },
    {
        "name": "batman",
        "imagem": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: "_PZpmTj1Q8Q"
    },
    {
        "name": "soul",
        "imagem": "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: "hWBxoH4-4yw"
    },
    {
        "name": "coringa",
        "imagem": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: "jfVTJm9NilA"
    },
    {
        "name": "interestelar",
        "imagem": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: "zSWdZVtXT7E"
    },
    {
        "name": "inception",
        "imagem": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: "YoHD9XEInc0"
    },
    {
        "name": "clube da luta",
        "imagem": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        trailer: "Fs0-4NLSO2Y"
    },
    {
        "name": "senhor dos anéis",
        "imagem": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", trailer: "V75dMMIW2B4"
    }
]

window.onload = function () {

    for (var i = 0; i < arrayFilmes.length; i++) {

        var listaFilmes = document.querySelector('#listaFilmes');
        var elementoFilme = "<img src=" + arrayFilmes[i].imagem + ">"
        listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
    }
}

const nomeOrdenar = document.querySelector('.filme1');
nomeOrdenar.onclick = ordenar;

function ordenar() {
    arrayFilmes.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1
        }
        return 0;
    });
    document.getElementById('listaFilmes').innerHTML = "";
    imprimirArray('listaFilmes', arrayFilmes);
    document.querySelector(".trailer").innerHTML = "";
}

function imprimirArray(id, array) {
    let div = document.getElementById(id);
    div.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        div.innerHTML += "<img src=" + array[i].imagem + ">"
    }
}

const pesquisarFilmes = document.querySelector('.pesquisarFilmes')
pesquisarFilmes.onclick = pesquisar;

function pesquisar() {
    var nomeFilme = document.querySelector("#filme").value;
    pesquisa = nomeFilme.toLowerCase();

    for (let i = 0; i < arrayFilmes.length; i++) {
        if (arrayFilmes[i].name == pesquisa) {
            document.getElementById('listaFilmes').innerHTML = "";
            document.querySelector('#listaFilmes').innerHTML = "<img src=" + arrayFilmes[i].imagem + ">";
            document.querySelector(".trailer").innerHTML = "<iframe width=" + 420 + " height=" + 315 + " src=" + "https://www.youtube.com/embed/" + arrayFilmes[i].trailer + ">"
            break;
        } else {
            document.getElementById('listaFilmes').innerHTML = "";
            document.querySelector('#listaFilmes').innerHTML = "Ainda não possuimos esse filme :( "
            document.querySelector(".trailer").innerHTML = ""; 
        }
    }
}