"use strict";
class User {
    constructor(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    ricarica(ammontare) {
        this.credito += ammontare;
    }
    chiamata(minuti) {
        this.credito - (minuti * 0.20);
        this.numeroChiamate += 1;
    }
    get chiama404() {
        return this.credito;
    }
    get getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let persona = new User('Ludovica', 'De Fazio');
persona.ricarica(15);
persona.chiamata(4);
persona.chiamata(1);
persona.chiamata(2);
console.log(persona.chiama404);
console.log(persona.getNumeroChiamata);
persona.azzeraChiamate();
