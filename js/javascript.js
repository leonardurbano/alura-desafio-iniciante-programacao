
resetPage();

function criptografaTexto(){

    
    let campoUm = document.getElementsByClassName("apresentacao__caixaCodificadora__caixaTexto")[0];
    
    if(campoUm.value != ''){
        let arrayFrase = campoUm.value.split(' ');
        let criptografada = '';
    
        for (let index = 0; index < arrayFrase.length; index++) {
            criptografada += arrayFrase[index].replace('e', 'enter').replace('i','imes').replace('a','ai').replace('o', 'ober').replace('u', 'ufat') + ' ';
        }
        //teste no console
        console.log(criptografada.trim());
    
        let frase = document.getElementsByClassName("apresentacao__caixaDecodificadora__caixaTexto")[0];
        frase.value = criptografada.trim();
    
        esconderImagem('Mensagem<br>Criptografada');
        isBotaoCopy();
    }
}

function descriptografaTexto(){

    let campoDois = document.getElementsByClassName("apresentacao__caixaCodificadora__caixaTexto")[0];

    if(campoDois.value != ''){
        let arrayFrase = campoDois.value.split(' ');
        let descriptografada = '';
    
        for (let index = 0; index < arrayFrase.length; index++) {
            descriptografada += arrayFrase[index].replace('enter', 'e').replace('imes', 'i').replace('ai', 'a').replace('ober', 'o').replace('ufat', 'u') + ' ';
        }
        //teste no console
        console.log(descriptografada.trim());
    
        let frase = document.getElementsByClassName("apresentacao__caixaDecodificadora__caixaTexto")[0];
        frase.value = descriptografada.trim();
    
        esconderImagem('Mensagem<br>Descriptografada');
        isBotaoCopy();
    }
}


function esconderImagem(mensagem){

    let imagem = document.getElementsByClassName('apresentacao__caixaDecodificadora__img')[0];

    if (imagem != null){
        imagem.parentNode.removeChild(imagem);   
    }
    
    let label = document.getElementsByClassName('apresentacao__caixaDecodificadora__texto__label')[0];
    label.innerHTML = mensagem;

    limpaValor("apresentacao__caixaCodificadora__caixaTexto");
    
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
        //alert('Copia realizada com sucesso');
        esconderImagem('Mensagem<br>Copiada');
    });

    limpaValor("apresentacao__caixaDecodificadora__caixaTexto");

}

function limpaValor(ClassName){
    let campo = document.getElementsByClassName(ClassName)[0];
    campo.value = '';
}

function resetPage(){
    limpaValor("apresentacao__caixaCodificadora__caixaTexto");
    limpaValor("apresentacao__caixaDecodificadora__caixaTexto");
}

