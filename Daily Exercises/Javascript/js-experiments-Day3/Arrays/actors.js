//defines an array called famousActors
let famousActors = [
    { 
      memID: 101, 
      name: "Bob Brown", 
      films: ["Bob I", "Bob II", "Bob III", "Bob IV"] 
    },
    { 
      memID: 142, 
      name: "Sallie Smith", 
      films: ["A Good Day", "A Better Day"] 
    },
    { 
      memID: 187, 
      name: "Fred Flanders", 
      films: ["Who is Fred?", "Where is Fred?", 
              "What is Fred?", "Why Fred?"]
    },
    { 
      memID: 203, 
      name: "Bobbie Boots", 
      films: ["Walking Boots", "Hiking Boots", 
              "Cowboy Boots"] 
    },
];

console.log ("-------------------------------------------------------------------");
// Using Array Functions
// Who is the actor whose ID is 187?
let memID = "187";
let actorID = famousActors.find(id => id.memID == memID);
console.log (`Start Date of the Course [ID: ${memID}] ` + actorID.name);
console.log ("-------------------------------------------------------------------");

// Who has have been in at least 3 films?

films = 3;
let actorsFilms = famousActors.filter(actor => {return actor.films.length >=3});
console.log (`Actors who have been in at least 3 films are`);
len = actorsFilms.length;
for(let i=0; i<len; i++) {
    console.log(actorsFilms[i].name);
}
console.log ("-------------------------------------------------------------------");

// Who has a name that starts with "Bob"?

const str1 = 'bob';
let result = famousActors.filter(actor => {return actor.name.toLowerCase().startsWith(str1.toLowerCase())});
len = result.length;
console.log(`Film names that starts with Bob are`);
for(let i=0; i<len; i++) {
    console.log(result[i].name);
}
console.log ("-------------------------------------------------------------------");


//Which actors have been in a film that starts with "A" 

const str2 = 'a';

let result1 = famousActors.filter(actor => {return (actor.films.filter(film => {return film.toLowerCase().startsWith(str2)})).length>0});
len = result1.length;

for(let i=0; i<len; i++) {
    result[i].name = result[i].name;
    console.log(`Actors/Actor have been in a film that starts with "A" are/is ${result1[i].name}`);
}
console.log ("-------------------------------------------------------------------");

/*
const str3 = 'A';
for (let k=0; k<famousActors.length; k++) {
    let actor = famousActors[k];
    let res1 = actor.films.filter(film => {return film.startsWith(str3)});
    console.log(`name: ${actor.name}, number of films: ${res1.length}`);
}
*/