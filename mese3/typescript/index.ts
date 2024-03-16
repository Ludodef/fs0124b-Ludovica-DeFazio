let variabile1 = 'Ludovica'
let variabile2 = 10
let variabile3 = true

let x:string   //in questo caso dara undefined perche non ho specificato nessun dato
let y:string = 'epicode'


y = 'rules'
y = true //in questo caso mi da errore perche' in ts se dichiariamo che e' una sringa non puo' essere nient'altro

variabile2 = 'ludovica' //in questo caso anche se non abbiamo specificato che si tratta di un numero ts ha capito da solo che si tratta di un number e quindi chi da' errore
//type inference = capisce il tipo di tantissime cose senza bisogna di esplicitarlo a mano,che non e' obbligatorio specificare il tipo

//in questo caso ci aiuta a selezionare solamente i metodi adatti al tipo di dato

let noname
//valore undefined ma ha un particolare tipo che si chiama any(qualsiasi cosa),non e' buona prassi,e' meglio assegnare sempre un tipo. se assegnamo any possiamo dare qualsiasi metodo e ts non ti puo' aiutare 

const myNumber = function(){
    return 5 // ts capisce che ritornera' un numero 

}

const myFunction = function (n1:number,n2:number){ //non stiamo tipizzando nessun tipo per questo ci da' errore se invece adesso ci assegnamo un tipo non ci dara' nessun errore 
    return n1 + n2
}

const stringArray : string[] = ['ludovica','ciao'] //dichiarazione di un array di stringhe

const anotherStringArray : Array<number> = [1,2,3] //altro metodo per dichiarare un'array

const nonRitorna = function(){
    console.log('ciao')  //funzione void,non ritorna un valore 
}

//posso dichiare i miei tipi utilizzando type

type CustomType = string | number // gli diciamo che puo' essere o una stringa o un numero | questo è detto union

let dontKnow : CustomType = 50 
dontKnow = 'ludovica'

const person: HumanBeing = { 
    nome: 'Gianni',
    cognome: 'Morandi',
    skills: ['suonare']
}

interface HumanBeing {
    nome:string
    cognome:string,
    skills?:string[]
}
//l'interfaccia e' come se fosse un modello da seguire se manca uno di questi tipi non va avanti,possiamo aggiungere un'opzionalita' con un punto interrogativo ?