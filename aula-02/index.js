const validarOpcao = document.querySelector('.btn-verify');

validarOpcao.onclick = opcaoEscolhida;

function opcaoEscolhida() {
    var personagensOp = document.querySelector('[name="characters"]:checked').value;

    if (personagensOp == "michael") {
        document.querySelector('span').innerHTML = "Personagem certo!! Arrasou =)) "
    } else if (personagensOp == "dwight") {
        document.querySelector('span').innerHTML = "Quase...tente novamente"
    } else if (personagensOp == "pam") {
        document.querySelector('span').innerHTML = "Foi um pouco longe, mas ainda pode tentar acertar de novo "
    } else {
        document.querySelector('span').innerHTML = "Não foi dessa vez =( Clique em outro nome "
    }

}
