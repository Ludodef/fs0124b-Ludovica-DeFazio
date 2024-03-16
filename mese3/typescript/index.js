var variabile1 = 'Ludovica';
var variabile2 = 10;
var variabile3 = true;
var x; //in questo caso dara undefined perche non ho specificato nessun dato
var y = 'epicode';
y = 'rules';
y = true; //in questo caso mi da errore perche' in ts se dichiariamo che e' una sringa non puo' essere nient'altro
variabile2 = 'ludovica'; //in questo caso anche se non abbiamo specificato che si tratta di un numero ts ha capito da solo che si tratta di un number e quindi chi da' errore
//type inference = capisce il tipo di tantissime cose senza bisogna di esplicitarlo a mano,che non e' obbligatorio specificare il tipo
//in questo caso ci aiuta a selezionare solamente i metodi adatti al tipo di dato
var noname;
//valore undefined ma ha un particolare tipo che si chiama any(qualsiasi cosa),non e' buona prassi,e' meglio assegnare sempre un tipo. se assegnamo any possiamo dare qualsiasi metodo e ts non ti puo' aiutare 
var myNumber = function () {
    return 5; // ts capisce che ritornera' un numero 
};
var myFunction = function (n1, n2) {
    return n1 + n2;
};
var stringArray = ['ludovica', 'ciao']; //dichiarazione di un array di stringhe
var anotherStringArray = [1, 2, 3]; //altro metodo per dichiarare un'array
var nonRitorna = function () {
    console.log('ciao'); //funzione void,non ritorna un valore 
};
var dontKnow = 50;
dontKnow = 'ludovica';
var person = {
    nome: 'Gianni',
    cognome: 'Morandi',
    skills: ['suonare']
};
//l'interfaccia e' come se fosse un modello da seguire se manca uno di questi tipi non va avanti,possiamo aggiungere un'opzionalita' con un punto interrogativo ?
