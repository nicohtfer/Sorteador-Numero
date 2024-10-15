function sortear() {
    let quantidadeNumero = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateNumero = parseInt(document.getElementById("ate").value);
    
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidadeNumero; i++) {
        numero = numeroAleatorio(doNumero, ateNumero);
        sorteados.push(numero);
    }
    alterarTexto("resultado", `Números sorteados: ${sorteados}`);
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarTexto(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}