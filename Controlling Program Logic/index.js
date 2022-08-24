// Conditional Statements

if (1 === 1) {
    console.log("It is true")
}


let rating = 0;

if (rating === 3) {
    console.log("It is a goal")
}
else if (rating === 2) {
    console.log("MEETS EXPECTATION")
}
else if (rating === 5) {
    console.log("You are too over a score")
}
else {
    console.log("You are not fit")
}

function findLargest(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is the greatest number`)
    }

    else if (num1 < num2) {
        console.log(`${num1} is the largest`)
    }
    else {
        console.log(`${num1} is equal to ${num2}`)
    }

}
findLargest(45, 45)
    

let loggedInUser = true;

if (loggedInUser) {
    console.log("You are logged In")
}
else {
    console.log("You are not logged In")
}


//Logical Operators

let number = 5;
if (number >= 2 && number <= 5) {
     console.log("You have won")
}
else {
    console.log("Your number is small")
 }