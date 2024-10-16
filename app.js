function sortear() {
    let quantidadeNumero = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateNumero = parseInt(document.getElementById("ate").value);
    
    if (doNumero > ateNumero) {
        alert("O número do campo 'Do número' precisa ser menor que o número do campo 'Até o número'");
        return;
    }

    let sorteados = [];
    let numero;
    
    let subNumero = ateNumero - doNumero;
    if (subNumero < quantidadeNumero) {
        alert("A quantidade inserida é maior do que os números possiveis");
        return;
    }
    //for para não repetir numeros sorteados
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

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    habilitarBotao()
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function habilitarBotao() {
    let btnReiniciar = document.getElementById("btn-reiniciar");
    if (btnReiniciar.classList.contains("container__botao-desabilitado")) {
        btnReiniciar.classList.remove("container__botao-desabilitado");
        btnReiniciar.classList.add("container__botao");
    } else {
    btnReiniciar.classList.remove("container__botao");
    btnReiniciar.classList.add("container__botao-desabilitado");
    }
}
