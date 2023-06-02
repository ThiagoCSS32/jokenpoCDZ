/*
/ideia:
Saint Seiya-Jokenpô.

Disputa de pedra, tesoura e papel, com contador de pontos, que simule a batalha de dois cavaleiros em que ao atingir 2 pontos chame uma animação de um golpe do personagem. reduzindo os pontos de vida do adversário.

*/
//começar o jogo:
const iniciar = document.querySelector(".comecar");
let trocartela = document.querySelector(".inicio-jogo");

iniciar.addEventListener("click", () => {
  tema.loop = true;
  tema.play();
  trocartela.classList.add("sumirTela");
});

// Funções principais
var afrodite
var placar = document.getElementById("placar");
var vencedor = false;
var draw = false;
var escolhaJogador;

//audio

const tema = new Audio("./sound/somjogo.mpeg");

const afrodite1 = {
  foto: document.getElementById("afrodite"),
  Hp2:100,
  voz:{
  audio1: new Audio("./sound/rosasdiabolicasreais.mpeg"),
  audio2: new Audio("./sound/rosabranca.mpeg"),
  audio3: new Audio("./sound/rosaspiranhas.mpeg"),
}
};
const camus1 = {
  foto: document.getElementById("camus"),
  Hp1:100,
  voz:{  
  audio1: new Audio("./sound/podiamante.mpeg"),
  audio2: new Audio("./sound/aurora.mpeg"),
  audio3: new Audio("./sound/Esquife.mpeg"),}



};

function escolha(opcao) {
  return (escolhaJogador = opcao);
}

function jogar() {
  //algoritmo do computador simples
  var sorteio = Math.floor(Math.random() * 3);
  switch (sorteio) {
    case 0:
      document.getElementById("duvida").src = "pedra.png";
      break;
    case 1:
      document.getElementById("duvida").src = "tesoura.png";
      break;
    case 2:
      document.getElementById("duvida").src = "papel.png";
      break;
  }
  //verificar o vencedor ou empate:
  if (
    (escolhaJogador == "pedra" && sorteio == 0) ||
    (escolhaJogador == "tesoura" && sorteio == 1) ||
    (escolhaJogador == "papel" && sorteio == 2)
  ) {
    document.getElementById("duvida-reverso").src = escolhaJogador + ".png";
    placar.innerHTML = "Empate";
    draw = true;
    efeitoDano();
  } else if (
    (escolhaJogador == "pedra" && sorteio == 1) ||
    (escolhaJogador == "tesoura" && sorteio == 2) ||
    (escolhaJogador == "papel" && sorteio == 0)
  ) {
    placar.innerHTML = "Jogador Venceu!!!";
    vencedor = true;
    efeitoDano();
    switch (sorteio) {
      case 0:
        camus1.foto.src = "diamonddust.gif";
        camus1.foto.setAttribute("alt", "camus");
        document.getElementById("duvida-reverso").src = "papel.png";
        camus1.voz.audio1.play();

        break;
      case 1:
        camus1.foto.src = "execution.gif";
        camus1.foto.setAttribute("alt", "camus");
        document.getElementById("duvida-reverso").src = "pedra.png";
        camus1.voz.audio2.play();

        break;
      case 2:
        camus1.foto.src = "esquifegelo.gif";
        camus1.foto.setAttribute("alt", "camus");
        document.getElementById("duvida-reverso").src = "tesoura.png";
        camus1.voz.audio3.play();

        break;
    }
    camus1.foto.style.width = "200px";
    camus1.foto.style.height = "250px";
    camus1.foto.style.transform = "translate(-10px, -30px)";
    document.querySelector(".danogelo").style.display = "inline";
    baixarHP(camus1);

    setTimeout(() => {
      camus1.foto.src = "camus.jpg";
      afrodite1.foto.src = "afrodite.jpg";
      camus1.foto.style.transform = "scale(1)";
      document.querySelector(".danogelo").style.display = "none";
      document.getElementById("duvida").src="./img/pandorabox.png"
      document.getElementById("duvida-reverso").src="./img/pandorabox.png"
    }, 2800);
  } else {
    if (sorteio == 0) {
      document.getElementById("duvida-reverso").src = "tesoura.png";
    } else if (sorteio == 1) {
      document.getElementById("duvida-reverso").src = "papel.png";
    } else {
      document.getElementById("duvida-reverso").src = "pedra.png";
    }
    let golpe;
    placar.innerHTML = "Computador Venceu!";
    efeitoDano();
    let listaGolpe = [
      "rosassangrentas.gif",
      "rosaspiranhas.gif",
      "rosabranca.gif",
    ];
    sorteio = Math.floor(Math.random() * listaGolpe.length);
    afrodite1.foto.src = listaGolpe[sorteio];
    if (listaGolpe[sorteio] === "rosassangrentas.gif") {
      golpe = "Rosas Sangrentas!!!";
      afrodite1.voz.audio3.play();
    } else if (listaGolpe[sorteio] === "rosaspiranhas.gif") {
      golpe = "Rosas Pìranhas!!!";
      afrodite1.voz.audio1.play();
    } else {
      golpe = "Minha mortal Rosa Branca!";
      afrodite1.voz.audio2.play();
    }
    placar.innerHTML = "Computador Venceu! Afrodite atacou usando " + golpe;
    setTimeout(() => {
      afrodite1.foto.src = "afrodite.jpg";
      afrodite1.foto.style.width = "200px";
      afrodite1.foto.style.transform = "scale(1)";
      document.querySelector(".danorosa").style.display = "none";
      document.getElementById("duvida-reverso").src="./img/pandorabox.png"
      document.getElementById("duvida").src="./img/pandorabox.png"
    }, 3000);
    afrodite1.foto.style.width = "200px";
    afrodite1.foto.style.height = "250px";
    afrodite1.foto.style.transform = "translate(10px, -30px)";
    document.querySelector(".danorosa").style.display = "inline";

    baixarHP(afrodite1);
    console.log(escolhaJogador);
  }
}

function reset() {
  placar.innerHTML = "";
  camus1.foto.src = "camus.jpg";
  afrodite1.foto.src = "afrodite.jpg";
  camus1.foto.style.width = "200px";
  camus1.foto.style.width = "200px";
  trocartela.classList.remove("sumirTela");
  document.querySelector(".hpt-1").style.background =
    "linear-gradient(to right, green 0%, green 100%, red 10%)";
  document.querySelector(".hpt-2").style.background =
    "linear-gradient(to left, green 0%, green 100%, red 10%)";
  camus1.Hp1 = 100;
  afrodite1.Hp2 = 100;
}

//Barras de Vidas

let barraHP1 = document.querySelector(".hpt-1");

function baixarHP(player) {
  if (player == afrodite1) {
    let dano = 20;
    camus1.Hp1 -= dano;
    camus1.Hp1 = String(camus1.Hp1);
    document.querySelector(".hpt-1").style.background =
      "linear-gradient(to right, yellow 0%, yellow " + camus1.Hp1 + "%, red 10%)";
    if (camus1.Hp1 < 0) {
      alert("Você perdeu, Fim de jogo!Que Atena te guie ao outro lado...");
      placar.innerHTML = "";
      reset();
    }
    console.log(camus1.Hp1); 
  } else {
    let dano = 20;
    afrodite1.Hp2 -= dano;
    afrodite1.Hp2 = String(afrodite1.Hp2);
    document.querySelector(".hpt-2").style.background =
      "linear-gradient(to left, yellow 0%, yellow " + afrodite1.Hp2 + "%, red 10%)";
    if (afrodite1.Hp2 < 0) {
      alert("Parabéns Jovem Cavaleiro! Você venceu este duelo");
      placar.innerHTML = "Parabéns você venceu este duelo!";
      reset();
    }

    console.log(afrodite1.Hp2);
  }
}

function efeitoDano() {
  if (draw) {
    camus1.foto.style.animationPlayState = "running";
    camus1.foto.style.position = "relative";
    afrodite1.foto.style.animationPlayState = "running";
    afrodite1.foto.style.position = "relative";
    draw = false;
  } else if (!vencedor) {
    setTimeout(() => {
      camus1.foto.style.animationPlayState = "running";
      camus1.foto.style.position = "relative";
    }, 300);
  } else {
    vencedor = false;
    setTimeout(() => {
      afrodite1.foto.style.animationPlayState = "running";
      afrodite1.foto.style.position = "relative";
    }, 300);
  }
  pararMovimento();
}

function pararMovimento() {
  setTimeout(() => {
    camus1.foto.style.animationPlayState = "paused";
    camus1.foto.style.position = "";
    afrodite1.foto.style.animationPlayState = "paused";
    afrodite1.foto.style.position = "";
  }, 1000);
}

function zerarEscolhas() {
  sorteio = "";
  escolhaJogador = "";
}
