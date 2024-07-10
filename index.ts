console.log("helloo")
// 1.Spiegazione generica (Cos'è, a cosa serve, che problema risolve, differenze con JS)
// 2.Il compilatore TS (perché è necessario? e come si usa?)
// 3.La Type Inference
// 4.Il tipo ‘any’
// 5.Il tipo Union
// 6.Il tipo Function
// 7.Le Interfaces in TS
// 8.Generics

//1. TypeScript è un linguaggio di programmazione open source sviluppato da Microsoft. È un superset di JavaScript, 
//  il che significa che estende JavaScript aggiungendo funzionalità avanzate come la tipizzazione statica.
//  A cosa serve?

// Serve a migliorare la produttività e la qualità del codice riducendo gli errori e facilitando la manutenzione. 
// Consente agli sviluppatori di scrivere codice più robusto, leggibile e manutenibile.
// Che problema risolve?

// Risolve problemi legati alla mancanza di tipizzazione in JavaScript, che può portare a errori difficili da rilevare e correggere. 
// Migliora l'esperienza di sviluppo fornendo strumenti avanzati come l'autocompletamento e il refactoring sicuro.


//  Differenze con JavaScript

// Tipizzazione Statica: JavaScript è dinamicamente tipizzato, mentre TypeScript è fortemente tipizzato. Questo significa che TypeScript rileva gli errori 
// di tipo durante la fase di compilazione.
// Strumenti di Sviluppo: TypeScript offre strumenti di sviluppo più avanzati grazie alla tipizzazione, migliorando l'efficienza e la qualità del codice.

// 2. Il Compilatore TypeScript
// Perché è necessario?

// TypeScript non può essere eseguito direttamente nei browser o in Node.js, quindi deve essere compilato (trasformato) in JavaScript. 
// Questo processo permette di utilizzare tutte le funzionalità avanzate di TypeScript mantenendo la compatibilità con gli ambienti di esecuzione JavaScript.
// Come si usa?

// Installazione: TypeScript può essere installato globalmente utilizzando npm.
// Compilazione: Una volta installato, il codice TypeScript viene compilato in JavaScript usando il comando tsc seguito dal nome del file TypeScript.
// Configurazione: È possibile creare un file di configurazione tsconfig.json per specificare le opzioni del compilatore, come il target ECMAScript e 
// la directory di output. Questo file semplifica la gestione di progetti TypeScript complessi.

//3.Type Inference
//Cos'è?

//La Type Inference è la capacità del compilatore TypeScript di dedurre automaticamente il tipo di una variabile o di un'espressione in base al suo valore 
// iniziale. Questo significa che spesso non è necessario specificare esplicitamente i tipi, poiché TypeScript può inferirli automaticamente.

function calcolaArea(larghezza: number, altezza: number) {
    // TypeScript deduce che area è di tipo number perché è il risultato di una moltiplicazione tra due numeri
    let area = larghezza * altezza;
    return area;
}

//Definisco i valori numerici
let larghezzaRettangolo = 5; // TypeScript deduce che larghezzaRettangolo è di tipo number
let altezzaRettangolo = 10; // TypeScript deduce che altezzaRettangolo è di tipo number


let areaRettangolo = calcolaArea(larghezzaRettangolo, altezzaRettangolo);

console.log(`L'area del rettangolo è: ${areaRettangolo}`); //cioè 50
//4. any
//Cos'è?

//Il tipo any è un tipo speciale in TypeScript che permette a una variabile di contenere qualsiasi tipo di valore.
// Quando una variabile è dichiarata con il tipo any, disabilita la verifica dei tipi per quella variabile, 
//consentendo di assegnare e utilizzare valori di qualsiasi tipo senza causare errori di tipo.


let incerto: any = 4;
incerto = "Forse una stringa invece";
incerto = false; // Ora è un booleano

let arrayMisto: any[] = [1, true, "libero"];
arrayMisto[1] = 100;

// 5. Union
//Cos'è?

///Un tipo Union permette a una variabile di contenere più tipi. Si utilizza il carattere | per separare i tipi. 
//Questo è utile quando una variabile può assumere valori di tipi diversi in contesti differenti.
let identifier: number | string;
identifier = 123; // OK
identifier = "ABC"; // OK
// identifier = true; // Errore:perchè non può essere assegnato un valore booleano nella variabile dichiarata

function printId(id: number | string) {
    console.log(`Your ID is: ${id}`);
}

printId(101);
printId("202B");
printId(101 + "20")

//6. Function

//Cos'è?
//Il tipo Function in TypeScript viene utilizzato per tipizzare funzioni. Specifica il tipo degli argomenti della funzione e il tipo del valore di ritorno. 
//Questo aiuta a garantire che le funzioni vengano chiamate con gli argomenti corretti e che restituiscano valori del tipo previsto.
function add(a: number, b: number): number {
    return a + b;
}

const subtract = (a: number, b: number): number => {
    return a - b;
};

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2

//7. Interfaces
//Cos'è un'interfaccia? o interface

//Un'interfaccia in TypeScript è una struttura che definisce un contratto nel codice, specificando le proprietà e i metodi che un oggetto deve avere. 
//Le interfacce non esistono nel codice JavaScript compilato, ma aiutano durante lo sviluppo.
//Perché usarle?

//Le interfacce aiutano a garantire che gli oggetti rispettino determinate forme, migliorando la robustezza del codice. 
//Migliorano la documentazione del codice e l'autocompletamento negli editor, facilitando lo sviluppo e la manutenzione.
interface Persona {
    nome: string;
    eta: number;
    presentati(): void;
}

const giuseppe: Persona = {
    nome: "Giuseppe",
    eta: 27,
    presentati() {
        console.log(`Mi chiamo ${this.nome} e ho ${this.eta} anni.`);
    }
};

giuseppe.presentati(); //output  Mi chiamo Giuseppe e ho 27 anni.
//8. Generics
//Cosa sono?

//I Generics in TypeScript permettono di creare componenti riutilizzabili che funzionano con una varietà di tipi. 
//I Generics forniscono un modo per definire classi, funzioni e interfacce che possono lavorare con tipi diversi senza sacrificare la sicurezza del tipo.

//Perché usarli?

//I Generics migliorano la riusabilità e la flessibilità del codice. Consentono di scrivere funzioni e classi generiche che possono essere 
//utilizzate con vari tipi di dati, riducendo la duplicazione del codice e migliorando la mantenibilità.


function primoElemento<T>(array: T[]): T {
    return array[0];
}


const stringhe = ["ciao", "mondo", "TypeScript"];
const primoStringa = primoElemento(stringhe);
console.log(primoStringa); // Output: "ciao"


const numeri = [10, 20, 30, 40];
const primoNumero = primoElemento(numeri);
console.log(primoNumero); // Output: 10


const booleani = [true, false, true];
const primoBooleano = primoElemento(booleani);
console.log(primoBooleano); // Output: true
