function limpaValor(){

    let campo = document.getElementsByClassName("apresentacao__caixaCodificadora__caixaTexto")[0];
    campo.value = '';

}

function criptografaTexto(){

    let campoUm = document.getElementsByClassName("apresentacao__caixaCodificadora__caixaTexto")[0];
    let criptografada = campoUm.value;
    
    let fraseGeral = criptografada.replace('e', 'enter').replace('i','imes').replace('a','ai').replace('o', 'ober').replace('u', 'ufat');


    let frase = document.getElementsByClassName("apresentacao__caixaDecodificadora__caixaTexto")[0];
    frase.value = fraseGeral;

    esconderImagem('Mensagem<br>Criptografada');
    isBotaoCopy();
    
}

function descriptografaTexto(){
    let campo = document.getElementsByClassName("apresentacao__caixaCodificadora__caixaTexto")[0];
    let descriptografada = campo.value.replace('enter','e').replace('imes', 'i').replace('ai', 'a').replace('ober', 'o').replace('ufat', 'u');
    
    let frase = document.getElementsByClassName("apresentacao__caixaDecodificadora__caixaTexto")[0];
    frase.value = descriptografada;

    esconderImagem('Mensagem<br>Descriptografada');
    isBotaoCopy();
}


function esconderImagem(mensagem){

    let imagem = document.getElementsByClassName('apresentacao__caixaDecodificadora__img')[0];

    if (imagem != null){
        imagem.parentNode.removeChild(imagem);   
    }
    
    let label = document.getElementsByClassName('apresentacao__caixaDecodificadora__texto__label')[0];
    label.innerHTML = mensagem;

    limpaValor();
    
}

function isBotaoCopy(){
 
    let botaoCopy = document.getElementsByClassName('apresentacao__caixaDecodificadora__botao__copy')[0];
    botaoCopy.removeAttribute('hidden');

}

function copyTexto() {
    
    let btn = document.getElementById('copy__texto');
    var textArea = document.getElementsByClassName('apresentacao__caixaDecodificadora__caixaTexto')[0];
    textArea.select();

    navigator.clipboard.writeText(textArea.value).then(() => {
        alert('Copia realizada com sucesso');
    });


    // btn.addEventListener('onclick', function(e){
    //     document.execCommand(textArea.value);
    // });

}