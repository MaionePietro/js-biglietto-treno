alert('Benvenuto in Trenitalia, i nostri treni ti porteranno a destinazione con 10 anni di ritardo');

// 1: Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere

let km = prompt('Quanti chilometri devi percorrere ?');
km = parseInt(km);
console.log(km);

// 2: Chiedere l'età del passeggero

let anni = prompt('inserisci la tua età');
anni = parseInt(anni);
console.log(anni);

// 3: Calcolare il prezzo totale dei kilometri
const kmPrezzo = (0.21 );
console.log(kmPrezzo);

const totKm = (km * kmPrezzo);
console.log('prezzo chilometri: ' + totKm + '€');

// 4: applicare sconto in base all'età 20% junior e 40% senior

if(anni <= 18){
    console.log('minore');
}else if(anni >= 65){
    console.log('magiore');
}

// 4: exit prezzo con 2 decimali





















/* 
BONUS:
dopo il calcolo invece di stampare solo il prezzo finale stampate proprio un simil biglietto del treno,
 dove inserite le seguenti informazioni:
numero kilometri del viaggio
nome e cognome del passeggero
prezzo base del biglietto
valore dello sconto
prezzo finale del biglietto
*/