function pegarDados() {
    //Variáveis (Buscar variáveis)
    let nameHeroi = document.getElementById("input-name").value;
    let exp = document.getElementById("input-exp").value;
    let paragrafo = document.querySelector(".paragrafo");
    // Estruturas de Decisão - Mensagem que aparece
    if (nameHeroi === "" || exp === "") {
        paragrafo.textContent = "Por favor, preencha todos os campos corretamente"
    }
    else {

        let nivelMensagem = "";
        if (exp <= 1000) {
            nivelMensagem = "Ferro"
        }
        else if (exp >= 1001 && exp <= 2000) {
            nivelMensagem = "Bronze"
        }
        else if (exp >= 2001 && exp <= 5000) {
            nivelMensagem = "Prata"
        }
        else if (exp >= 5001 && exp <= 7000) {
            nivelMensagem = "Ouro"
        }
        else if (exp >= 7001 && exp <= 8000) {
            nivelMensagem = "Platina"
        }
        else if (exp >= 8001 && exp <= 9000) {
            nivelMensagem = "Ascendente"
        }
        else if (exp >= 9001 && exp <= 10000) {
            nivelMensagem = "Imortal"
        }
        else if (exp > 1001) {
            nivelMensagem = "Radiante"
        }
        paragrafo.textContent = "O Herói de nome " + nameHeroi + " está no nível " + nivelMensagem

    }

}
