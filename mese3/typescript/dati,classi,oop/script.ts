class Studente{
    nome:string;
    cognome:string;

    constructor (_nome: string, _cognome:string){
        this.nome=_nome;
        this.cognome= _cognome;
    }
    getStudente(): string{
        return `${this.nome} ${this.cognome}`;
         }

         private numeroRandom(): number{
            return Math.floor(Math.random()*11)
         } 

         somma (num1:number):number{
            return num1 + this.numeroRandom();
         }
 }

 class Utente extends Studente{
    eta:number;

    constructor(_nome:string,_cognome:string,_eta:number){
        super(_nome,_cognome);
        this.eta= _eta
    }

    getStudente(): string {
        return `${this.nome} ${this.cognome} di anni ${this.eta}`;
    }
 }

 let nuovoStudente = new Studente ('Ludovica', 'De Fazio')
 console.log(nuovoStudente.getStudente())
 console.log(nuovoStudente.somma(10))

let nuovoUtente = new Utente('Ludovica','De Fazio',29)
console.log(nuovoUtente.getStudente())