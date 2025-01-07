// ======= TUPLE =======
// ======= Lvl 1_1 =======
console.log("Tuple Lvl 1_1");

type StarWarsActor = [string, string]

const starWarsActor : StarWarsActor[] = [
    ["Luke Skywalker", "Mark Hamill"],
    ["Darth Vader", "James Earl Jones"],
    ["Yoda", "Frank Oz"],
    ["Han Solo", "Harrison Ford"],
    ["Princess Leia", "Carrie Fisher"]
]

// starWarsActor.forEach((element) => console.log(element[1] + " spielt " + element[0]))

for (const actor of starWarsActor) {
    console.log(actor[1] + " spielt " + actor[0])
}

// ======= Lvl 2_1 =======
console.log("2_1");

type Employees = [number, string, string, number];

const employees : Employees[] = [
    [1, "Susanne", "HR", 51600],
    [2, "Magda", "Marketing", 50000],
    [3, "Uma", "Art Director", 53200],
    [4, "Siobhan", "Supervisor", 50500],
    [5, "Bisan", "PR", 54600],
];

for (const employee of employees) {
    console.log(employee);
}

// ======= SET =======
// ======= Lvl 1_1 =======
console.log("Set Lvl 1_1");

const starWarsCharacters = new Set(["Luke Skywalker", "Darth Vader", "Obi Wan Kenobi"]);
console.log(starWarsCharacters);
starWarsCharacters.add("Leia Organa")
console.log(starWarsCharacters);
starWarsCharacters.add("Leia Organa")
console.log(starWarsCharacters);

// ======= Lvl 2_1 =======
console.log("Lvl 2_1");

const marvelCharacters : string[] = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Spider Man"];
marvelCharacters.push("Iron Man", "Thor");
console.log(marvelCharacters);

const marvelCharactersSet = new Set(marvelCharacters);
console.log(marvelCharactersSet);

// ======= MAP =======
// ======= Lvl 1_1 =======
console.log("Map Lvl 1_1");

const favoriteBands = new Map<string, string[]>([
    ["The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]],
    ["Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]],
    ["Kiss", ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"]]
]);
console.log(favoriteBands.size);

favoriteBands.set("NWA", ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"]);
console.log(favoriteBands.size);

const bandMembers = favoriteBands.get("Queen");

if (bandMembers) {
    const lastBandMember = bandMembers[bandMembers.length - 1];
    console.log(lastBandMember);
}

// ======= Lvl 2_1 =======
console.log("Lvl 2_1");

console.log(favoriteBands.has("Metallica")); //false
favoriteBands.set("The Beatles", ["Bingo", "Bongo", "Pongo", "Pingu"]);

console.log(favoriteBands);
console.log(favoriteBands.get("The Beatles"));
// der eintrag wird überschrieben

// ======= Lvl 3_1 =======
console.log("Lvl 3_1");

for (const [band, [member]] of favoriteBands) {
    if(member.length >= 12) {
        console.log(`Band: ${band}, Member: ${member}, Length: ${member.length}`);
    }
}

// ======= LOOPS =======
// ======= Lvl 1_4 =======

const friendNames : string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];
for (const name of friendNames) {
    console.log(name);
}