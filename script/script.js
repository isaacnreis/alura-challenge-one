var btn_criptografar = document.querySelector(".botao-crip");
var btn_descriptografar = document.querySelector(".botao-descrip");
var btn_copiar = document.querySelector(".botao-copiar");
var msg_sem_result = document.querySelector(".esconder1");
var msg_result = document.querySelector(".esconder2");
var area = document.getElementById("area");
var resultado = document.getElementById("area-result");

area.addEventListener("paste", function() {

    const aceitos = new RegExp("^[0-9a-z\b]+$");
    const proprio = this;

    setTimeout(function() {

        const texto = proprio.value;

        if(!aceitos.test(texto)) {
            proprio.value = proprio.value.replace(/[A-Z]/g, '');
            proprio.value = proprio.value.replace(/[àèìòùáéíóúâêîôûãõç]/g, '');
            proprio.value = proprio.value.replace(/[ÀÈÌÒÙÁÉÍÓÚÂÊÎÔÛÃÕÇ]/g, '');
            proprio.value = proprio.value.replace(/[!@#$%¨&*()_-]/g, '');
            proprio.value = proprio.value.replace(/[§´=+'"`^~?/\°º{}><]/g, '');
        }

    }, 10)

});

area.addEventListener("keypress", function(evento) {

    if(!checarDigitacao(evento)) {
        evento.preventDefault();
    }

});

function checarDigitacao(evento) {

    const digitacao = String.fromCharCode(evento.keyCode);

    const aceitos = '[a-z 0-9]';

    if(digitacao.match(aceitos)) {
        console.log(digitacao);
        return true;
    }

}

function objetoVazio(){
    if(area.value == ""){
        return true;
    } else {
        return false;
    }
}

function checar(){
    if(objetoVazio()){
        alert("Preencha o campo de texto que será Criptografado/Descriptografado");
    } else {
        msg_sem_result.style.display = 'none';
        msg_result.style.display = 'flex';
    }
}

function criptografar(){
    checar();

    let i = area.value.toLowerCase();

    var tratado = i.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    return resultado.innerHTML = tratado;
}

function descriptografar(){
    checar();

    let i = area.value.toLowerCase();

    var tratado = i.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    return resultado.innerHTML = tratado;

}

function copiar() {
    navigator.clipboard.writeText(resultado.innerHTML).then(()=> {
        alert("Mensagem copiada")
        area.value = null
        btn_copiar.innerHTML = "Copiado"
        btn_copiar.disable = true
    })
    .catch(()=> {alert("Erro");
    });
}

btn_criptografar.onclick = criptografar;
btn_descriptografar.onclick = descriptografar;
btn_copiar.onclick = copiar;