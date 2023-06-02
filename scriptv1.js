/*
/ideia:
Saint Seiya-Jokenpô.

Disputa de pedra, tesoura e papel, com contador de pontos, que simule a batalha de dois cavaleiros em que ao atingir 2 pontos chame uma animação de um golpe do personagem. reduzindo os pontos de vida do adversário.

*/
// Funções principais
var camus = document.getElementById("camus");
var afrodite = document.getElementById("afrodite");
var placar = document.getElementById("placar");
var vencedor = false
var draw = false
const btnPedra = document.getElementById("pedra");
const btnPapel = document.getElementById("papel");
const btnTesoura = document.getElementById("tesoura");


function jogar(){
    if(document.getElementById("pedra").checked == false && document.getElementById("tesoura").checked == false && document.getElementById("papel").checked == false){
        alert("Você precisa selecionar pedra, papel ou tesoura!")
    } else {
        //algoritmo do computador simples
        var sorteio = Math.floor(Math.random()*3);
        switch(sorteio){
            case 0:
            document.getElementById("duvida").src="pedra.png"
            break;
            case 1:
            document.getElementById("duvida").src="tesoura.png"
            break;
            case 2:
            document.getElementById("duvida").src="papel.png"
            break;
        }
        //verificar o vencedor ou empate:
        if(document.getElementById("pedra").checked == true && sorteio == 0 || document.getElementById("tesoura").checked == true && sorteio == 1 || document.getElementById("papel").checked == true && sorteio == 2 ) {
            placar.innerHTML = "Empate";
            draw = true
            efeitoDano();


    

        } else if (document.getElementById("pedra").checked == true && sorteio == 1 || document.getElementById("tesoura").checked == true && sorteio == 2 || document.getElementById("papel").checked == true && sorteio == 0 ) {
           
            placar.innerHTML = "Jogador Venceu!"
            vencedor = true;
            efeitoDano();
            switch (sorteio){
                case 0:
                camus.src = "diamonddust.gif";
                camus.setAttribute("alt", "camus");
               
                break;
                case 1:
                camus.src = "execution.gif";
                camus.setAttribute("alt", "camus");
               
                break;
                case 2:
                camus.src = "trovaoaurora.gif";
                camus.setAttribute("alt", "camus");
               
                break;
            }
            camus.style.width ="50%"
            camus.style.height ="50%"
            baixarHP(camus)
            
            setTimeout(()=>{
                camus.src = "camus.jpg"
                camus.style.width ="250px"
                afrodite.src ="afrodite.jpg"
            },2000)

        } else {
            let golpe;
            placar.innerHTML = "Computador Venceu!"
            efeitoDano();
            let listaGolpe = ["rosassangrentas.gif","rosaspiranhas.gif","rosabranca.gif"];    
            sorteio = Math.floor(Math.random()*listaGolpe.length);
            afrodite.src = listaGolpe[sorteio];
            if (listaGolpe[sorteio] === "rosassangrentas.gif"){
                golpe = "Rosas Sangrentas!!!"
            } else if ( listaGolpe[sorteio] === "rosaspiranhas.gif") {
                golpe = "Rosas Pìranhas!!!"
            } else {
                golpe = "Minha mortal Rosa Branca!"
            }
            placar.innerHTML = "Computador Venceu! Afrodite atacou usando "+golpe;
            setTimeout(()=>{
                afrodite.src = "afrodite.jpg";
                afrodite.style.width = "250px";
                camus.src="camus.jpg"
            },2000)
            afrodite.style.width = "50%"
            afrodite.style.height = "50%"
            baixarHP(afrodite)
         
        }

    }

}
function reset(){
    placar.innerHTML="";
    document.getElementById("duvida").src="interro.jpg";
    document.getElementById("camus").src="camus.jpg";
    document.getElementById("afrodite").src="afrodite.jpg";
    document.getElementById("camus").style.width="250px";
    document.getElementById("afrodite").style.width="250px";
}

//Barras de Vidas

let barraHP1 = document.querySelector(".hpt-1");

let Hp1 = 100;
let Hp2 = 100;

function baixarHP(player){
    if(player == afrodite){
    let dano = 20;
    Hp1 -= dano;
    Hp1 = String(Hp1);
    document.querySelector(".hpt-1").style.background="linear-gradient(to right, green 0%, green "+Hp1+"%, red 10%)" 
    console.log(Hp1);
   } else {
    let dano = 20;
    Hp2 -= dano;
    Hp2 = String(Hp2);
    document.querySelector(".hpt-2").style.background="linear-gradient(to left, green 0%, green "+Hp2+"%, red 10%)" 
  
    console.log(Hp1); 
    if(Hp2< 0 ){
        alert("Parabéns! Você venceu este duelo");
        placar.innerHTML = "Parabéns você venceu este duelo!";
        document.querySelector(".hpt-1").style.background="linear-gradient(to right, green 0%, green 100%, red 10%)" 
        document.querySelector(".hpt-2").style.background="linear-gradient(to left, green 0%, green 100%, red 10%)" 
        Hp1 = 100
        Hp2 = 100
        
    } else if(Hp1 < 0){
        alert( 'Fim de jogo!');
        placar.innerHTML = "Que Atena te guie ao outro lado..."
        document.querySelector(".hpt-1").style.background="linear-gradient(to right, green 0%, green 100%, red 10%)" 
        document.querySelector(".hpt-2").style.background="linear-gradient(to left, green 0%, green 100%, red 10%)"
        Hp1 = 100
        Hp2 = 100 
    }
   }
}

function efeitoDano(){
    if( draw ){
    camus.style.animationPlayState="running"
    camus.style.position="relative"
    afrodite.style.animationPlayState ="running"
    afrodite.style.position="relative"
    draw = false;
    } else if (!vencedor){
        setTimeout(()=>{
            camus.style.animationPlayState="running"
            camus.style.position="relative"
        },300)

    } else {
        vencedor = false;
        setTimeout(()=>{
            afrodite.style.animationPlayState="running"
            afrodite.style.position="relative"
        },300)
    }
   pararMovimento();
}

function pararMovimento() {
    setTimeout(()=>{
        camus.style.animationPlayState="paused"
        camus.style.position=""
        afrodite.style.animationPlayState ="paused"
        afrodite.style.position=""
    },1000)
} 