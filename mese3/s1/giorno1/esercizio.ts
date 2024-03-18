interface Smartphone{
    credito: number,
    numeroChiamate:number
    
    
    ricarica(ammontare:number):void
    chiamata (minuti: number):void
    get chiama404():number
    get getNumeroChiamata(): number
    azzeraChiamate():void
    
}

class User implements Smartphone{
    nome:string
    cognome:string
    credito:number = 0 
    numeroChiamate: number = 0
 constructor(_nome:string, _cognome:string){
    this.nome=_nome;
    this.cognome= _cognome
 }

 ricarica(ammontare:number):void {
    this.credito += ammontare
 }

 chiamata(minuti:number):void{
    let costo = 0.20 * minuti;
    this.credito -= costo
    this.numeroChiamate++
 }
get chiama404(): number {
    return this.credito
}
get getNumeroChiamata(): number {
    return this.numeroChiamate
}

azzeraChiamate():void {
   this.numeroChiamate = 0 
}
}

let persona= new User('Ludovica','De Fazio')
persona.ricarica(15);
persona.chiamata(4);
persona.chiamata(1);
persona.chiamata(2);
console.log(persona);

console.log(persona.chiama404);
console.log(persona.getNumeroChiamata);
persona.azzeraChiamate()



