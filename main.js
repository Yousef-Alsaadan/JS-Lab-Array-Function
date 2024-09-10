characters = [
    {
        name: "Luke Skywalker",
        height: 177,
        gender: "male",
        mass: 77,
        eye_color: "brown",
    },
    {
        name: "Leia Organa",
        height: 160,
        gender: "female",
        mass: 56,
        eye_color: "blue",
    },
    {
        name: "Han Solo",
        height: 180,
        gender: "male",
        mass: 80,
        eye_color: "brown",
    },
    {
        name: "Chewie",
        height: 222,
        gender: "male",
        mass: 190,
        eye_color: "black",
    },
    {
        name: "kevien",
        height: 106,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
    },
];


console.log(characters.find(character => character.eye_color === "blue").name);

console.log(characters.find(character => character.mass >= 50).gender);

console.log(characters.filter(character => character.height < 200));

console.log(characters.filter(character => character.gender === "male"));

console.log(characters.map(character => character.name));

console.log(characters.map(character => character.height));

console.log(characters.sort((character1, character2) => character1.mass - character2.mass));

console.log(characters.sort((character1, character2) => character2.mass - character1.mass));

console.log(characters.every(character => character.mass > 40));

console.log(characters.every(character => character.height < 200));

console.log(characters.some(character => character.eye_color === "blue"));

console.log(characters.some(character => character.height > 210));