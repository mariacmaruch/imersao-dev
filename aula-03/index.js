const confirmarSinal = document.querySelector('.btn-enviar');

confirmarSinal.onclick = verficarNum;

var menor = 0;
var maior = 50;
var tentativas = 0;


function verficarNum() {
    var sinal = document.querySelector('.comparar').value;
    var media = (maior + menor) / 2;

    if (sinal == "menor") {
        maior = media;
        media = (media + menor) / 2;
        tentativas += 1;
    } else if (sinal == "maior") {
        menor = media;
        media = (media + maior) / 2;
        tentativas += 1;
    } else {
        document.querySelector('.fraseAcerto').innerHTML = "O número escolhido foi " + media.toFixed(0) + ". Foram utilizadas " + tentativas + " tentativas!"

    }
    document.querySelector('#numero').innerHTML = media.toFixed(0);
}