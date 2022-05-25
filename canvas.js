
/*O fillRect() precisa de algumas informações para conseguir desenhar o retângulo, que estarão na ordem: 
posição inicial X do “pincel”, posição inicial Y do “pincel”, posição final X do “pincel”, 
posição final Y do “pincel”.*/ 

// desenhando os tracinhos
var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
 pincel.fillStyle = 'lightgray';
 pincel.fillRect(0, 0, 800, 500);


    pincel.fillStyle = "black";
    pincel.fillRect =(750,450,90,100);
    


