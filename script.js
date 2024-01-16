//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");


//! PRIMO ESERCIZIO

// CREO UNA COSTANTE PER DARE UN NOME AD OGNI TAVOLO
const tableName = 'Tavolo Vip';


// CREO L'ARRAY CON TUTTI I NOMI DEI VIPS
const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];


// USO UN MAP PER CREARE UN NUOVO ARRAY CONTENENTE UN OGGETTO CON SPECIFICI ATTRIBUTI PER OGNI SINGOLO INVITATO
const guestsList = guests.map((guest, index) => {
    return {
        tableName: tableName,
        Name: guest,
        seat: index + 1
    };
});

// STAMPO IN CONSOLE

console.log(guestsList);



//! SECONDO ESERCIZIO


// SCRIVO L'ARRAY DI OGGETTI
const students = [
    { id: 213, name: "Marco della Rovere", grades: 78 },
    { id: 110, name: "Paola Cortellessa", grades: 96 },
    { id: 250, name: "Andrea Mantegna", grades: 48 },
    { id: 145, name: "Gaia Borromini", grades: 74 },
    { id: 196, name: "Luigi Grimaldello", grades: 68 },
    { id: 102, name: "Piero della Francesca", grades: 50 },
    { id: 120, name: "Francesca da Polenta", grades: 84 }
];

// DALL'ARRAY DI PARTENZA CREO UNA LISTA CHE HA COME CONTENUTO SOLO STUDENTI CON VOTO MAGGIORE A 70
const gradesOver70 = students.filter(({ grades }) => grades > 70)

// STAMPO IN CONSOLE
console.log(gradesOver70);

// DALL'ARRAY DI PARTENZA CREO UNA LISTA CHE HA COME CONTENUTO SOLO STUDENTI CON VOTO MAGGIORE A 70 E ID MAGGIORE A 120
const gradesOver70IdOver120 = gradesOver70.filter(({ id }) => id > 120)

// STAMPO IN CONSOLE
console.log(gradesOver70IdOver120);


// DALL'ARRAY DI PARTENZA CREO UNA LISTA CHE HA COME CONTENUTO I NOMI DEGLI STUDENTI MA SCRITTI IN MAIUSCOLO
const upperNames = students.map(({ name }) => {
    return name.toUpperCase();
});

// STAMPO IN CONSOLE
console.log(upperNames);


