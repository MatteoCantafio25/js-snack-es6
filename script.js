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
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78,
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96,
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48,
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74,
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68,
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50,
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84,
    }
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


//! TERZO ESERCIZIO


// SCRIVO L'ARRAY DI OGGETTI
const bikes = [
    {
        name: "Fury",
        weight: 6.9,
    },
    {
        name: "Fireborn",
        weight: 9.6,
    },
    {
        name: "Cruz",
        weight: 4.8,
    },
    {
        name: "Nap",
        weight: 7.4,
    },
    {
        name: "JJ",
        weight: 6.8,
    },
    {
        name: "Cloud",
        weight: 5.0,
    },
    {
        name: "Flash",
        weight: 8.4,
    }
];

// CREO UN FLAG SUPPONENDO CHE LA PRIMA BICICLETTA SIA LA PIU' LEGGERA
let lightestBike = bikes[0];

// CICLO TUTTE LE BICICLETTE PER CONTROLLARLE IL PESO UNA AD UNA
for (let i = 0; i < bikes.length; i++) {

    // CREO UNA COSTANTE BIKE
    const bike = bikes[i];
    // RICAVO LA BICICLETTA PIU' LEGGERA
    if (bike.weight < lightestBike.weight) {
        // CAMBIO IL VALORE INIZIALE CON LA BICICLETTA EFFETTIVAMENTE TROVATA
        lightestBike = bike;
    }
}

// STAMPO IN CONSOLE LA BICICLETTA PIU' LEGGERA
console.log(lightestBike)

// DESTRUCTURING DELLA BICICLETTA PIU' LEGGERA
const { name, weight } = lightestBike;

// STAMPO IN CONSOLE UN MESSAGGIO CON GLI ELEMENTI DINAMICI OTTENUTI DAL DESTRUCTURING
console.log(`La bici più leggera è ${name} con un peso di ${weight} kg.`);




//! QUARTO ESERCIZIO


// CREO UNA FUNZIONE PER GENERARE UN NUMERO RANDOM DA MIN A MAX CON MAX INCLUSO
const getRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNumber
}


// SCRIVO L'ARRAY DI OGGETTI 
const teams = [
    {
        name: "Napoli",
        mp: 0,
        sf: 0,
    },
    {
        name: "Juventus",
        mp: 0,
        sf: 0,
    },
    {
        name: "Milan",
        mp: 0,
        sf: 0,
    },
    {
        name: "Vigor Lamezia",
        mp: 0,
        sf: 0,
    },
    {
        name: "Cosenza",
        mp: 0,
        sf: 0,
    },
];

// CREO 2 COSTANTI CHE DETERMINANO IL NUMERO MINIMO E MASSIMO CHE POI ANDRANNO NELLA FUNZIONE PRECEDENTEMENTE CREATA

const minNumber = 1;
const maxNumber = 30;

// CICLO L' ARRAY ORIGINALE PER ASSEGNARE UN NUMERO RANDOM A MP = (MADE POINTS) E SF = (SUFFERED FOULS)
for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.mp = getRandomNumber(minNumber, maxNumber);
    team.sf = getRandomNumber(minNumber, maxNumber);
}

// STAMPO IN CONSOLE
console.log(teams);

// CREO UN NUOVO ARRAY SENZA TOCCARE L'ORIGINALE PER AVERE SOLO PARAMETRI DECISI DA ME
const teamFouls = teams.map(({ name, sf }) => {
    // CREO IL NUOVO OGGETTO CHE ANDRA' NELL'ARRAY
    return { name, sf };
});

// STAMPO IN CONSOLE
console.log(teamFouls);


