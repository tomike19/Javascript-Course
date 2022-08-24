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

// function findLargest(num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} is the greatest number`)
//     }

//     else if (num1 < num2) {
//         console.log(`${num1} is the largest`)
//     }
//     else {
//         console.log(`${num1} is equal to ${num2}`)
//     }

// }
// findLargest(45, 45)
    

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
 

function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} is the largest`)
    }
    else if (num2 > num3) {
        console.log(`${num2} is the Largest`)
    }

    else {
       console.log(`${num3} is the Largest number`)
    }
}
 
findLargest(24, 48, 7)
findLargest(2, 1, 0)
 

 // OR ||
 // If One side is true, the whole side is true

let age  = 7;
if (age < 10 || age >= 20) {
     console.log('You get in free')
}
else {
    console.log('You must Payyy!')
 }


// NOT (!)
//expression returns true if the expression is false