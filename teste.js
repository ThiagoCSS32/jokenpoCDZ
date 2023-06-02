//sorteio

let lista = ["abacate", "pera", "uva"]

let index = Math.floor(Math.random()*lista.length);

let dano = 20;
let calcDano = 100 - dano;
calcDano = String(calcDano)
console.log(lista[index]);

function baixarHP(){
   
    document.querySelector(".hpt-1").style.background="linear-gradient (to right, green 0%, green "+calcDano+"%, red 10%)"   
}

console.log(typeof(calcDano))

const action = setInterval (()=>{
    console.log( " Olá mundo")
},1000)

