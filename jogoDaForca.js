// variaveis iniciais

var palavrasIniciais= ["DESAFIO", "ESCOLA", "APRENDER", "TRABALHAR", "SUPERAR", "VENCER", "GIRAFA"];
var tela = document.querySelector("canvas").getContext("2d");
var letras=[];
var palavraCorreta = "";
var erros = 9;


// adicionando palavras novas
const adicionaPalavra = document.querySelector("#adicionaPalavra");
 adicionaPalavra.addEventListener("click", function(e) {
        e.preventDefault();

        const palavraNova= document.querySelector("#palavraNova");

        const valor = palavraNova.value;

        console.log(valor);
        palavrasIniciais.push(valor.toUpperCase());
        console.log(palavrasIniciais);
        palavraNova.value ="";
})


// sorteando uma palavra
var BotaoIniciaJogo = document.querySelector("#BotaoIniciaJogo");
var palavraDoJogo = document.querySelector("#palavraDoJogo");
var palavraSorteada = palavrasIniciais[Math.floor(Math.random()*palavrasIniciais.length)]
function sorteiaPalavra(){

    palavraDoJogo.value = palavraSorteada;
    console.log(palavrasIniciais);
    return
}

// selecionado canvas

 tela.fillStyle = 'lightblue';
 tela.fillRect(0, 0, 1200, 860);

 // escrevendo tracinhos
 function escrevendoTracinhos() {
     tela.lineWidth = 6; // espessura da linha
     tela.lineCap = "round";
     tela.lineJoin = "round";
     tela.strokeStyle ="#0A3871";
     tela.beginPath();
     var eixo = 600/palavraSorteada.length
     for (let i=0; i< palavraSorteada.length; i++) {
         tela.moveTo(500+(eixo*i), 640);
         tela.lineTo(550+(eixo*i), 640);
     }
    tela.stroke();
    tela.closePath();
 } escrevendoTracinhos(sorteiaPalavra)

 function escreverLetraCorreta (index) {
     tela.font = "bold 52px Kdam Thmor Pro";
     tela.lineWidth = 6;
     tela.lineJoin = "round";
     tela.strokeStyle ="#0A3871";
     var eixo = 600/palavraSorteada.length
     tela.fillText(palavraSorteada[index], 505+(eixo*index), 620)
     tela.stroke()
 }

 function escreverLetraIncorreta (letra,errosLeft) {
     tela.font = "bold 40px Kdam Thmor Pro"
     tela.lineWidth = 6; // espessura da linha
     tela.lineCap = "round";
     tela.lineJoin = "round";
     tela.strokeStyle ="#0A3871";
     tela.fillText(letra, 535+(40*(10-errosLeft)), 710, 40)
 }

 function verificarLetraCorreta (key) {
     if(letras.length < 1 || letras.indexOf(key) < 0) {
         letras.push(key)
         return false
     }
     else{
         letras.push(key.toUpperCase())
         return true
     }
 }
  function adicionarLetraCorreta(i) {
    palavraCorreta +=palavraSorteada[i].toUpperCase()
  }

    function adicionarLetraIncorreta(letter) {
        if (palavraSorteada.indexOf(letter) <= 0) {
            erros-= 1
        }
    }

    document.onkeydown = (e) => {
        var letra = e.key.toUpperCase()
        if (!verificarLetraCorreta(e)) {
            if(palavraSorteada.includes(letra)) {
                adicionarLetraCorreta(palavraSorteada.indexOf(letra))
                for(let i=0; i<palavraSorteada.length; i++) {
                    if(palavraSorteada[i] === letra) {
                        escreverLetraCorreta(i)
                    }
                }
            }
        }
        else{
            if (!verificarLetraCorreta(e.key))
             return 
            adicionarLetraIncorreta(letra)    
            escreverLetraIncorreta(letra,erros)
        }
        
    }
 BotaoIniciaJogo.addEventListener("click", sorteiaPalavra);