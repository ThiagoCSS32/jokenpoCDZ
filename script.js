/*
/ideia:
Saint Seiya-Jokenpô.

Disputa de pedra, tesoura e papel, com contador de pontos, que simule a batalha de dois cavaleiros em que ao atingir 2 pontos chame uma animação de um golpe do personagem. reduzindo os pontos de vida do adversário.

*/
// Funções principais
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
            document.getElementById("placar").innerHTML = "Empate";
        } else if (document.getElementById("pedra").checked == true && sorteio == 1 || document.getElementById("tesoura").checked == true && sorteio == 2 || document.getElementById("papel").checked == true && sorteio == 0 ) {
            var camus = document.getElementById("camus")
            document.getElementById("placar").innerHTML = "Jogador Venceu!"
            document.getElementById("camus").style.width="300px";
            switch (sorteio){
                case 0:
                camus.src = "diamonddust.gif";
                break;
                case 1:
                camus.src = "execution.gif";
                break;
                case 2:
                camus.src = "trovaoaurora.gif";
                break;
            }
            baixarHP(camus)

        } else {
            document.getElementById("placar").innerHTML = "Computador Venceu!"
            let afrodite = document.getElementById("afrodite")
            afrodite.style.width="300px";
            let listaGolpe = ["rosassangrentas.gif","rosaspiranhas.gif","rosabranca.gif"];    
            sorteio = Math.floor(Math.random()*listaGolpe.length);
            afrodite.src = listaGolpe[sorteio];
            baixarHP(afrodite)
         
        }

    }

}
function reset(){
    document.getElementById("placar").innerHTML="";
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
        alert("Parabéns, Você Ganhou esta Batalha!");
        document.getElementById("placar").innerHTML = "Parabéns você venceu este duelo!"
        document.querySelector(".hpt-1").style.background="linear-gradient(to right, green 0%, green 100%, red 10%)" 
        document.querySelector(".hpt-2").style.background="linear-gradient(to left, green 0%, green 100%, red 10%)" 

    } else if(Hp1<0){
        alert( 'Fim de jogo!');
        document.getElementById("placar").innerHTML = "Que Atena te guie ao outro lado..."
        document.querySelector(".hpt-1").style.background="linear-gradient(to right, green 0%, green 100%, red 10%)" 
        document.querySelector(".hpt-2").style.background="linear-gradient(to left, green 0%, green 100%, red 10%)" 
    }
   }
}

