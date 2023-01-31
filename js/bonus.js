alert('Benvenuto in Trenitalia, i nostri treni ti porteranno a destinazione con 10 anni di ritardo');
let nome, cognome;
nome = prompt('inserisci il tuo nome');
document.getElementById('nome_id').innerHTML = nome;

cognome = prompt('inserisci ul tuo cognome');
document.getElementById('cognome_id').innerHTML = cognome;

let partenza, arrivo;
partenza = prompt('stazione partenza');
document.getElementById('partenza_id').innerHTML = partenza;

arrivo = prompt('stazione arrivo');
document.getElementById('arrivo_id').innerHTML = arrivo;

// 1: Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere

let km = prompt('Quanti chilometri devi percorrere ?');
km = parseInt(km);
document.getElementById('km_id').innerHTML = km + ' km';
console.log(km);

// 2: Chiedere l'età del passeggero

let anni = prompt('inserisci la tua età');
anni = parseInt(anni);
console.log(anni);

// 3: Calcolare il prezzo totale dei kilometri
const kmPrezzo = (0.21 );
console.log(kmPrezzo);

const totKm = (km * kmPrezzo);
document.getElementById('totKm_id').innerHTML = totKm + ' tot €';
console.log('prezzo chilometri: ' + totKm + ' €');

// 4: applicare sconto in base all'età 20% junior e 40% senior
let sconto, prezzoFinale, prezzoDecimali;

if(anni <= 18){
    sconto = (totKm / 100) * 20;
    prezzoFinale = totKm - sconto;
    document.getElementById('sconto_id').innerHTML = ('20%');
    prezzoDecimali = prezzoFinale.toFixed(2);
    console.log('prezzo finale: ' + prezzoDecimali + '€');
    document.getElementById('prezzo_id').innerHTML = (prezzoDecimali + ' €');
}else if(anni >= 65){
    sconto = (totKm / 100) * 40;
    prezzoFinale = totKm - sconto;
    document.getElementById('sconto_id').innerHTML = ('40%');
    prezzoDecimali = prezzoFinale.toFixed(2);
    console.log('prezzo finale: ' + prezzoDecimali + '€');
    document.getElementById('prezzo_id').innerHTML = (prezzoDecimali + ' €');
}
