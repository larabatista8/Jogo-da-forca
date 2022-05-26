// colocando palavras iniciais do jogo

var palavrasIniciais= ["desafio", "escola", "aprender", "trabalhar", "superar", "vencer"]

// adicionando palavras novas
const adicionaPalavra = document.querySelector("#adicionaPalavra");
 adicionaPalavra.addEventListener("click", function(e) {
    e.preventDefault();

    const palavraNova= document.querySelector("#palavraNova");

    const valor = palavraNova.value.upperCase;

   console.log(valor);
palavrasIniciais.push(valor);
console.log(palavrasIniciais);
})

// sorteando uma palavra
var iniciaJogo = document.querySelector("#iniciaJogo");
var palavraDoJogo = document.querySelector("#palavraDoJogo");
function sorteia(){
   
    var maximo = palavrasIniciais.length;
    var palavraSorteada =palavrasIniciais[Math.floor(Math.random()*maximo)]
    palavraDoJogo.value = palavraSorteada;
    console.log(palavraSorteada);
    return
}

iniciaJogo.addEventListener("click", sorteia);