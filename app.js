function sortear() {
    let quantidadeNumero = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateNumero = parseInt(document.getElementById("ate").value);
    
    let sorteados = [];
    let numero;
//for para nao repetir numeros sorteados
    for (let i = 0; i < quantidadeNumero; i++) {
        numero = numeroAleatorio(doNumero, ateNumero);
        while (sorteados.includes(numero)) {
            numero = numeroAleatorio(doNumero, ateNumero);
        }
        sorteados.push(numero);

        habilitarBotao();
    }

    let palavraSorteado = quantidadeNumero > 1 ? "sorteados" : "sorteado";
    let palavraNumero = quantidadeNumero > 1 ? "Numeros" : "Numero";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">${palavraNumero} ${palavraSorteado}:  ${sorteados}</label>`;
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function habilitarBotao() {
    let btnReiniciar = document.getElementById("btn-reiniciar");
    btnReiniciar.classList.remove("container__botao-desabilitado");
    btnReiniciar.classList.add("container__botao");
}
