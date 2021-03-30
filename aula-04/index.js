var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYjc1N2M1YjMtYzBiNi00NGFiLThkN2QtY2EwZGU5MDRkODAzXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var nomeFilmes = ["Parasita", "Matrix", "Bacurau", "Fragmentado", "Star Wars"]

const mostrar = document.querySelector('button');

mostrar.onclick = gerarFilmes;

function gerarFilmes() {
    var numeroFilme = Number(document.querySelector('#number-usuario').value);

    if (numeroFilme == 1) {
        document.querySelector('.cartaz1').innerHTML = "<img src=" + listaFilmes[0] + ">" + "<p><b><u><font size=4>" + nomeFilmes[0] + "</font><u><b>";
    } else if (numeroFilme == 2) {
        document.querySelector('.cartaz2').innerHTML = "<img src=" + listaFilmes[1] + ">" + "<p><b><u><font size=4>" + nomeFilmes[1] + "</font><u><b>";
    } else if (numeroFilme == 3) {
        document.querySelector('.cartaz3').innerHTML = "<img src=" + listaFilmes[2] + ">" + "<p><b><u><font size=4>" + nomeFilmes[2] + "</font><u><b>";
    } else if (numeroFilme == 4) {
        document.querySelector('.cartaz4').innerHTML = "<img src=" + listaFilmes[3] + ">" + "<p><b><u><font size=4>" + nomeFilmes[3] + "</font><u><b>";
    } else if (numeroFilme == 5) {
        document.querySelector('.cartaz5').innerHTML = "<img src=" + listaFilmes[4] + ">" + "<p><b><u><font size=4>" + nomeFilmes[4] + "</font><u><b>";
    }
}