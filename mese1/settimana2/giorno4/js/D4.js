/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  return l1 * l2;
}
console.log(area(4, 6));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a, b) {
  if (a == b) {
    return (a + b) * 3;
  }
  return a + b;
}
console.log( crazySum(2 ,2 ))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(a){
if( a > 19){
        return Math.abs(a - 19) * 3 
    }else{
    return Math.abs(a - 19)}
}
console.log(crazyDiff(20))
console.log(crazyDiff(10))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n){
    if ((n >= 20 && n <= 100) || n == 400){
        return true
    }else {
        return false
    }
    
}
console.log(boundary(40))
console.log(boundary(200))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(str){
    if( str.startsWith ('EPICODE')){
        return str
    }else{
        return 'EPICODE' + str
    }
     
}
console.log(epify('EPICODE'))
console.log(epify('ciao'))
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7 ( num ){
    if (num % 3 == 0 || num % 7 == 0){
    return true}else{
        return false 
    }
}
console.log (check3and7(12))
console.log(check3and7(13))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(string){
    return string.split('').reverse().join('')
}
console.log(reverseString('ludovica'))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
    
    const parola = str.split(" ");
    let risultato = [];
    for (let i = 0; i < parola.length; i++) {
        
        let primaLettera = parola[i].charAt(0).toUpperCase();
        let restoParola= parola[i].slice(1);
        let parolaCompleta = primaLettera + restoParola;

        risultato.push(parolaCompleta)
    }
    
    return risultato.join(' ')
    
}
console.log(upperFirst('domani dobbiamo fare il test'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

    
/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str){
return str.substring(1,3)}
 console.log(cutString('ciao'))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n){
    return Math.floor(Math.random() * 10);
}
console.log(giveMeRandom())