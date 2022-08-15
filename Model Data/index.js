//string methods
let message = "You are learning really fast"
message = message.toUpperCase()
console.log(message)

//Trim methods
let color = "     black   is   gold     ";
color = color.trim()
console.log(color)

//Index of method
let games = "basketball"
games = games.indexOf(1)
console.log(games)

//slice methods
//   It takes the slice of an  existing string and it gives a piece of it.

let sport = "Baseball"
sport = sport.slice(2, 4)
console.log(sport)

//Rreplace method

let entertainment = "entertain";
entertainment = entertainment.replace('entertain', 'enjoyment')
console.log(entertainment)

//Escape string

let words = 'I didn\'t see this coming at all';
console.log(words)

let word = 'I didn\'t see this \ncoming at all';
console.log(word)

// String template literals
let minAge = 20;
let myAge = 30;
console.log(`You must be ${minAge} to be my ${myAge} mate`)