 /* 
Palidroma

Chiedere all’utente di inserire una parola Creare una funzione per capire 
se la parola inserita è palindroma

*/

function reverseText(testo){

  var textReverse = testo.split('').reverse().join('');  
  return textReverse;
}

var userWord = prompt("inserisci una parola");

var textOutput = document.getElementById("textOutput")

var textReverse = reverseText(userWord);

if(userWord == textReverse){
    textOutput.innerHTML= 'la parola è palindroma'
} else {
    textOutput.innerHTML= 'la parola non è palindroma'
}

 /* 
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Infine, dichiariamo chi ha vinto.
*/

function pariDispari(sommaNum) {
    var max = 5;
    var min = 1;
    var numUser = prompt("Inserisci un numero pari o dispari tra 1 e 5");
    var numPc = Math.floor(Math.random()* 5 ) + 1;
    
    // controlla se il numero utente è fra 1 e 5
    while (numUser < min || numUser > max) {
      numUser = prompt("Inserisci un numero fra 1 e 5 per gareggiare");
    }  
    
    // controlla se il numero del utente  pari o dispari
    var result = document.getElementById("play");
    var sommaNum = parseInt(numUser) + parseInt(numPc);

    if (sommaNum % 2 === 0 && numUser % 2 === 0) {
  
     result.innerHTML = "  il numero è pari";
  
    } else if (sommaNum % 2 === min && numUser % 2 === max) {
  
     result.innerHTML = "  il numero è dispari";
  
    } else{
     result.innerHTML = " perso.... Ha vinto il pc";
  
    }
  }