//TODO 1. Elenca e descrivi i principali datatypes in Javascript. prova a spiegarli come se volessi farli comprendere ad un bambino.
//?I principali datatypes in Js sono: numbers, string, boolean, undefined, null.

//TODO 2. Scrivi il codice necessario ad effettuare un'addizione dei due numeri 12 e 20 e salvando il risultato in una variabile.
  const a = 12;
  const b = 20;
  let sum = a+b;

//TODO 3. Crea una variabile di nome x e assegna ad essa il numero 12.
  let x = 12;

//TODO 4. Crea una variabile "name" e assegna ad essa il tuo nome, sotto forma di stringa.
  let name = "Jerome";

// TODO 5. Esegui una sottrazione tra i numeri 4 e la variabile x appena dichiarata che contiene il numero 12.
  let subt = 4 - x;

// TODO 6. Crea un oggetto in Js che ti rappresenti (come proprietá usa nome, cognome e hobby).
  const Persona = {
    nome: "Jerome",
    cognome: "Decinco",
    hobby: "Scrivere codice",
  }

// TODO 7. Crea due variabili name1 e name 2. Assegna a name 1 la stringa "john", e assegna a name2 la stringa "John" con la J maiuscola. Verifica che name1 sia diersa da name 2. Infine verifica che la loro ugualianza diventi true se entrambe vengono trasformate in Lowercase.
  let name1;
  let name2;

  name1 = "john";
  name2 = "John";

  let verifica1 = name1 === name2;
  let verifica2 = name1.toLowerCase === name2.toLowerCase;
  console.log(verifica2);
